/* eslint-disable no-console */
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
      rowDetails: this.props.rowDetails,
      suggestedAdd: this.props.suggestedAdd,
      addOption: this.props.addOption,
    };

    this.removeOption = this.removeOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption() {
    console.log(`${this.state.rowName} selected`);
    this.state.addOption(this.state.suggestedAdd);
  }

  removeOption() {
    console.log(`${this.state.rowName} removed from roll`);
  }

  render() {
    return (
      <li id="table-row">
        <span id="row-buttons">
          <Button clickHandler={this.selectOption} text="+" />
          <Button clickHandler={this.removeOption} text="-" />
        </span>
        <p id="row-name">{this.state.rowName}</p>
        <p id="row-description">{this.state.rowDetails}</p>
      </li>
    );
  }
}

export default TableRow;
