/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// Main Server File
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Authentication and Database methods
const authentication = require('./authentication');
const dynamoDB = require('../Database/index');
const secret = require('./_config');

// Tables
const campaign = require('./CampaignTables/CampaignTables');
const hero = require('./CampaignTables/HeroTables');
const adventure = require('./CampaignTables/AdventureTables');
const npc = require('./CampaignTables/NPCTables');
const location = require('./CampaignTables/LocationTables');
const encounter = require('./CampaignTables/EncounterTables');
const rewards = require('./CampaignTables/RewardsTables');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/api/table/adventure/adventureStart', (req, res) => {
  res.status(200);
  res.send(adventure.adventureStart);
});

app.get('/api/table/adventure/:tableName', (req, res) => {
  res.status(200);
  const tableName = req.params.tableName;
  res.send(adventure[tableName]);
});

app.get('/api/table/:tabName/:tableName', (req, res) => {
  res.status(200);
  const tabName = req.params.tabName;
  const tableName = req.params.tableName;

  if (tabName === 'campaign') {
    res.send(campaign[tableName]);
  } else if (tabName === 'hero') {
    res.send(hero[tableName]);
  } else if (tabName === 'adventure') {
    res.send(adventure[tableName]);
  } else if (tabName === 'npc') {
    res.send(npc[tableName]);
  } else if (tabName === 'location') {
    res.send(location[tableName]);
  } else if (tabName === 'encounter') {
    res.send(encounter[tableName]);
  } else if (tabName === 'rewards') {
    res.send(rewards[tableName]);
  }
});

app.get('/api/authenticate', async (req, res) => {
  console.log('Attempting Authentication.....');
  const token = req.header('Authorization').replace('Bearer ', '');
  const payload = await authentication.validateToken(token, secret);
  const username = payload.username;

  dynamoDB.get({
    TableName: 'campaignCreatorUsers',
    Key: { 'userID': username },
  }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(401).send({ error: 'Please Authenticate' });
    } else if (data.Item) {
      const user = data.Item;
      const tokens = user.tokens;
      if (tokens.indexOf(token) >= 0) {
        res.status(200).send(user.sources);
      } else {
        res.status(401).send({ error: 'Please Authenticate' });
      }
    } else {
      res.status(401).send({ error: 'Please Authenticate' });
    }
  });
});

app.post('/api/login', async (req, res) => {
  console.log('Attempting User Validation....');

  if (req.body.password && req.body.username) {
    const username = req.body.username;
    const password = req.body.password;
    const token = await authentication.generateToken(req.body.username, secret, '1 week');

    dynamoDB.get({
      TableName: 'campaignCreatorUsers',
      Key: { 'userID': username },
    }, async (err, data) => {
      if (err) {
        console.error(err);
        res.status(401).send('Username or Password Invalid');
      } else if (data.Item) {
        const user = data.Item;
        if (await authentication.validatePassword(password, user.hashedPassword)) {
          // if the username and password provided match
          console.log('Password Match');
          // add the token to the user in the database
          const tokenArray = user.tokens;
          tokenArray.push(token);
          dynamoDB.update({
            TableName: 'campaignCreatorUsers',
            Key: { 'userID': username },
            UpdateExpression: 'set #t = :t',
            ExpressionAttributeNames: { '#t': 'tokens' },
            ExpressionAttributeValues: { ':t': tokenArray },
          }, (error) => {
            if (error) {
              console.error(error);
            }
          });
          // authenticate the user for the front-end client
          res.status(200).send(token);
        } else { // if the password doesn't match
          console.log('Password Invalid');
          res.status(401).send('Username or Password Invalid');
        }
      } else { // uncaught database error
        console.log('Uncaught Database Error');
        res.status(401).send('Username or Password Invalid');
      }
    });
  } else { // if they failed to send both a username and password
    console.log('Username or Password not recieved');
    res.status(401).send('Username or Password Invalid');
  }
});

app.post('/api/signup', async (req, res) => {
  console.log('Attempting to Create a New User....');
  if (req.body.password && req.body.username && req.body.emailAddress) {
    const hashedPassword = await authentication.hashPassword(req.body.password);
    const email = req.body.emailAddress;
    const username = req.body.username;
    const token = await authentication.generateToken(req.body.username, secret, '1 week');

    // check if the user exists in the database
    dynamoDB.get({
      TableName: 'campaignCreatorUsers',
      Key: { 'userID': username },
    }, (err, data) => {
      if (err) {
        console.error(err);
        res.status(401).send('Error creating new user: error contacting database');
      } else if (data.Item) {
        res.status(401).send('Error creating new user: username already exists');
      } else {
        dynamoDB.put({
          TableName: 'campaignCreatorUsers',
          Item: {
            'userID': username,
            'hashedPassword': hashedPassword,
            'email': email,
            'tokens': [token],
            'sources': { 'dmg': true },
            'campaigns': {},
          },
        }, (error) => {
          if (error) {
            console.error(error);
            res.status(401).send('Error creating new user: error contacting database');
          }
          res.status(200).send(token);
        });
      }
    });
  } else {
    res.status(401).send('Error creating new user: invalid username or password');
  }
});

app.post('/api/logout', async (req, res) => {
  console.log('Logging Out.....');
  const token = req.body.token;
  const payload = await authentication.validateToken(token, secret);
  const username = payload.username;

  dynamoDB.get({
    TableName: 'campaignCreatorUsers',
    Key: { 'userID': username },
  }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(401).send({ error: 'Database connection error...' });
    } else if (data.Item) {
      const user = data.Item;
      const tokenArray = user.tokens;
      const index = tokenArray.indexOf(token);
      tokenArray.splice(index, 1);
      dynamoDB.update({
        TableName: 'campaignCreatorUsers',
        Key: { 'userID': username },
        UpdateExpression: 'set #t = :t',
        ExpressionAttributeNames: { '#t': 'tokens' },
        ExpressionAttributeValues: { ':t': tokenArray },
      }, (error) => {
        if (error) {
          console.error(error);
        } else {
          res.status(200).send('Logout Successful');
        }
      });
    } else {
      res.status(401).send({ error: 'Logout Unsuccessful' });
    }
  });
});

module.exports = app;
