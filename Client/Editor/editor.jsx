/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import EditorNav from './editorNavBar.jsx';

function Editor(props) {
  return (
    <div id="editor-component">
      <h2 id="editor-title">Campaign Document</h2>

      <EditorNav
        selectedTab={props.selectedTab}
        changeTab={props.changeTab}
      />
      <div id="text-editor">
        <textarea
          id="text-box"
          rows="30"
          cols="85"
          placeholder="Input campaign text here..."
          value={props.text}
          onChange={props.updateText}
        />
      </div>
    </div>
  );
}

export default Editor;
