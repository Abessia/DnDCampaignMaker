/* eslint-disable react/no-unused-state */
/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import TableRows from './tableRows.jsx';
import TableHeader from './tableHeader.jsx';

function Table(props) {
  return (
    <div>
      <h2>Campaign Options</h2>
      <div id="table">
        <h4 id="table-title">{props.table.title}</h4>
        <p id="table-description">{props.table.description}</p>
        <TableHeader
          addOption={props.addOption}
          roll={props.roll}
          highestRange={props.highestRange}
          previousTable={props.previousButton}
          resetTable={props.resetTable}
          nextTable={props.nextTable}
          next={props.next}
        />
        <TableRows
          addOption={props.addOption}
          rows={props.rows}
        />
      </div>
    </div>
  );
}

export default Table;
