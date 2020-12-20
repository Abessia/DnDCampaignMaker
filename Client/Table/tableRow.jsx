/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TableRows from './tableRows.jsx';

function TableRow(props) {
  return (<li>{props.description}</li>);
}

export default TableRow;
