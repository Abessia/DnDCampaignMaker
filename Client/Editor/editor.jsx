/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
// import TextEditor from './textEditor.jsx';
// import Button from '../Components/button.jsx';
import EditorNav from './editorNavBar.jsx';
import DisabledButton from '../Components/disabledButton.jsx';

function Editor(props) {
  return (
    <div id="editor-component">
      <h2 id="editor-title">Campaign Document</h2>

      <EditorNav selectedTab={props.selectedTab} />
      <div id="text-editor">
        <textarea
          id="text-box"
          rows="30"
          cols="75"
          placeholder="Input campaign text here..."
          value={props.text}
          onChange={props.updateText}
        />
      </div>

      <span>
        <DisabledButton
          clickHandler={() => { console.log(props.text); }}
          text="Export"
          className="file-nav"
          id="file-nav__export"
        />
        <DisabledButton
          clickHandler={() => { console.log(props.text); }}
          text="Save"
          className="file-nav"
          id="file-nav__save"
        />
        <DisabledButton
          clickHandler={() => { console.log(props.text); }}
          text="Load"
          className="file-nav"
          id="file-nav__load"
        />
      </span>
    </div>
  );
}

export default Editor;
