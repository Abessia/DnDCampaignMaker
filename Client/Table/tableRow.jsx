/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '../Components/button.jsx';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowName: this.props.rowName,
    };
  }

  render() {
    return (
      <li id="table-row">
        <span id="row-buttons">
          <Button clickHandler={() => {}} text="+" />
          <Button clickHandler={() => {}} text="-" />
        </span>
        <p id="row-name">{this.state.rowName}</p>
        <p id="row-description"> details </p>
      </li>
    );
  }
}

export default TableRow;
