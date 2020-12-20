/* eslint-disable import/extensions */
import React from 'react';
import Table from './Table/table.jsx';
import Editor from './Editor/editor.jsx';

function App() {
  return (
    <div>
      <h1>DnD Campaign Creator</h1>
      <Table />
      <Editor />
      <h4>Footer</h4>
    </div>
  );
}

export default App;
