/* eslint-disable no-console */
import axios from 'axios';

const updateUserPermission = (data, callback) => {
  axios.post('http://localhost:3000/api/permission', data);
  callback();
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  updateUserPermission(request);
  sendResponse({ status: 200 });
});

// set up storage to record
// set up check / authentication that this username is not already in use
