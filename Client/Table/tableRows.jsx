/* eslint-disable import/extensions */
import React from 'react';
import TableRow from './tableRow.jsx';

function TableRows() {
  return (
    <div>
      <h3>Where Does Your Adventure Take Place?</h3>
      <ul>
        <TableRow description="The Wilderness" />
        <TableRow description="The Dungeon" />
      </ul>
    </div>
  );
}

export default TableRows;
