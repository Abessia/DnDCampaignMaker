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
        <h4 id="table-title">Where Does Your Adventure Take Place?</h4>
        <p id="table-description">Adventures set in crumbling dungeons and remote wilderness locations are the cornerstone of countless campaigns.</p>
        <TableHeader />
        <TableRows addOption={props.addOption} />
      </div>
    </div>
  );
}

export default Table;
