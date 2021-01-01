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
      rowName: this.props.rowName,
      // rowDetails: this.props.rowDetails,
      rowIndex: this.props.rowIndex,
      nextTable: this.props.nextTable,
      bottomRange: this.props.bottomRange,
      upperRange: this.props.upperRange,
      suggestedAdd: this.props.suggestedAdd,
      addOption: this.props.addOption,
      removeOption: this.props.removeOption,
      setNext: this.props.setNext,
    };

    this.remove = this.remove.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption() {
    this.state.addOption(this.state.suggestedAdd);
    this.state.setNext(this.state.nextTable);
    console.log(`Calling setNext With: ${this.state.nextTable}`);
  }

  remove() {
    this.state.removeOption(this.state.rowIndex);
  }

  render() {
    return (
      <li id="table-row">
        <span id="row-buttons">
          <Button clickHandler={this.selectOption} text="+" />
          <DisabledButton text="-" />
        </span>
        <p id="row-name">{this.state.rowName}</p>
        <p id="row-description">{` ${this.state.bottomRange} - ${this.state.upperRange} `}</p>
      </li>
    );
  }
}

export default TableRow;
