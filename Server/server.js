/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// Main Server File
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adventures = require('./Tables/AdventureTables');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/api/table/adventure/adventureType', (req, res) => {
  res.status(200);
  res.send(adventures.adventureType);
});

app.get('/api/table/adventure/:tableName', (req, res) => {
  res.status(200);
  const tableName = req.params.tableName;
  res.send(adventures[tableName]);
});

module.exports = app;
