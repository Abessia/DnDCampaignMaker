/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '../Components/button.jsx';
import DisabledButton from '../Components/disabledButton.jsx';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addOption: this.props.addOption,
    };

    // this.remove = this.remove.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption() {
    this.state.addOption(this.props.suggestedAdd, this.props.nextTable);
  }

  /* remove() {
    this.state.removeOption(this.state.rowIndex);
  } */

  render() {
    return (
      <li id="table-row">
        <p id="row-range">{`${this.props.bottomRange}-${this.props.upperRange}`}</p>
        <span id="row-buttons">
          <Button clickHandler={this.selectOption} text="+" id="add" />
          <DisabledButton text="-" />
        </span>
        <p id="row-name">{this.props.rowName}</p>
      </li>
    );
  }
}

export default TableRow;

/* removeOption(index) {
    const rows = this.state.currentRows.slice();

    // adjust the ranges for subsequent random rolls (+1 for inclusive of lowRange)
    const range = (rows[index].highRange - rows[index].lowRange + 1);

    for (let i = rows.length - 1; i > index; i--) {
      // console.log(`Prior range ${rows[i].lowRange} to ${rows[i].highRange}`);
      rows[i].highRange = rows[i].highRange - range;
      rows[i].lowRange = rows[i].lowRange - range;
      // console.log(`New range ${rows[i].lowRange} to ${rows[i].highRange}`);
    }

    // Delete the option selected for removal from the table rows
    rows.splice(index, 1);
    this.setState(
      { currentRows: rows.slice() },
    );
  } */
