/* eslint-disable import/extensions */
import React from 'react';
import TextEditor from './textEditor.jsx';
import Button from '../Components/button.jsx';

function Editor() {
  return (
    <div>
      <h2>Campaign Document</h2>
      <TextEditor />
      <Button clickHandler={() => {}} text="Export" />
    </div>
  );
}

export default Editor;
