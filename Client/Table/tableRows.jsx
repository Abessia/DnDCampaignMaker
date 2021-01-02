/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import TableRow from './tableRow.jsx';

function TableRows(props) {
  return (
    <ul id="table-rows">
      { props.rows.map((row, index) => {
        return (
          <TableRow
            rowName={row.name}
            rowDetails={row.details}
            nextTable={row.next}
            bottomRange={row.lowRange}
            upperRange={row.highRange}
            suggestedAdd={row.suggestedAdd}
            addOption={props.addOption}
            // removeOption={props.removeOption}
            rowIndex={index}
            key={row.lowRange}
          />
        );
      })}
    </ul>
  );
}

export default TableRows;
