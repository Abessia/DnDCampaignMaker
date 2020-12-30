/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Button from '../Components/button.jsx';

function TableHeader() {
  return (
    <div id="table-header">
      <div id="header-row">
        <Button clickHandler={() => {}} id="roll-button" text="Roll" />
        <p id="option-header">Option</p>
        <p id="description-header">Description</p>
      </div>
    </div>
  );
}

export default TableHeader;
