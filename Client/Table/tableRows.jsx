/* eslint-disable import/extensions */
import React from 'react';
import TableRow from './tableRow.jsx';

function TableRows() {
  return (
    <ul id="table-rows">
      <TableRow rowName="The Wilderness" />
      <TableRow rowName="The Dungeon" />
    </ul>
  );
}

export default TableRows;
