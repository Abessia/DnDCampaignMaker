/* eslint-disable import/extensions */
import React from 'react';
import Table from './Table/table.jsx';
import Editor from './Editor/editor.jsx';

function App() {
  return (
    <div id="grid-container">
      <Table id="table-component" />
      <Editor id="editor-component" />
    </div>
  );
}

export default App;
