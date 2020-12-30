/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import TableRow from './tableRow.jsx';

function TableRows(props) {
  return (
    <ul id="table-rows">
      <TableRow rowName="The Wilderness" addOption={props.addOption} />
      <TableRow rowName="The Dungeon" addOption={props.addOption} />
    </ul>
  );
}

export default TableRows;
