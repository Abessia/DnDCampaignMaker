/* eslint-disable no-console */

/*
This content script places a button on the table of contents page for the DMG on dndbeyond's website
*/

const nicknameArray = document.getElementsByClassName('user-interactions-profile-nickname');
const userNickname = nicknameArray[0].innerHTML;
const sourceBook = 'dmg';

function confirmUser() {
  console.log(userNickname);
  chrome.runtime.sendMessage({ username: userNickname, source: sourceBook }, (response) => {
    console.log(response);
  });
}

const pageHeading = document.getElementsByClassName('page-heading__content');
console.log(pageHeading);

const newButton = document.createElement('button');
const buttonText = document.createTextNode('Add to Campaign Maker');
newButton.appendChild(buttonText);
pageHeading[0].appendChild(newButton);

newButton.addEventListener('click', confirmUser);
