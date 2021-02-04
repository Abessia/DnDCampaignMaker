/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable no-console */
const AWS = require('aws-sdk');
const awsConfig = require('./_config.js');

AWS.config.update(
  {
    accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
    secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2',
  },
);
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// eslint-disable-next-line arrow-body-style
const readUser = async (username, callback) => {
  const databaseCall = await dynamoDB.get({
    TableName: 'campaignCreatorUsers',
    Key: { 'userID': username },
  }, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
      return err;
    }
    callback(null, data.item);
    return data.item;
  });

  return databaseCall;
};

// eslint-disable-next-line arrow-body-style
const createUser = (username, hashedPassword, emailAddress, token) => {
  return dynamoDB.put({
    TableName: 'campaignCreatorUsers',
    Item: {
      'userID': username,
      'hashedPassword': hashedPassword,
      'email': emailAddress,
      'tokens': [token],
    },
  }, (err, data) => {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(data);
    return data;
  });
};

module.exports = dynamoDB;
