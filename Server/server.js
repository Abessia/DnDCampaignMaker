/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// Main Server File
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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

app.get('/api/authenticate/:user', (req, res) => {
  res.status(200);
  console.log('Attempting Authentication.....');
  try {
    const token = req.params.user;
    console.log(token);
    if (token === 'thisisatoken') {
      res.status(200).send('Authentication Successful');
    }
  } catch (error) {
    res.status(401).send({ error: 'Please Authenticate' });
  }
});

module.exports = app;
