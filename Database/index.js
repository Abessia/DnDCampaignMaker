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

dynamoDB.get({
  TableName: 'campaignCreatorUsers',
  Key: {
    'userID': 'sample',
  },
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
