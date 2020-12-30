/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import TableRows from './tableRows.jsx';
import TableHeader from './tableHeader.jsx';
// import RollButton from './rollButton.jsx';

function Table(props) {
  return (
    <div>
      <h2>Campaign Options</h2>
      <div id="table">
        <h4 id="table-title">{props.table.title}</h4>
        <p id="table-description">{props.table.description}</p>
        <TableHeader
          addOption={props.addOption}
          rows={props.table.rows}
        />
        <TableRows
          addOption={props.addOption}
          rows={props.table.rows}
        />
      </div>
    </div>
  );
}

export default Table;
