/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '../Components/button.jsx';
// import DisabledButton from '../Components/disabledButton.jsx';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addOption: this.props.addOption,
    };

    this.selectOption = this.selectOption.bind(this);
  }

  selectOption() {
    this.state.addOption(this.props.suggestedAdd, this.props.nextTable);
  }

  render() {
    return (
      <li id="table-row">
        <p id="row-range">{`${this.props.bottomRange}-${this.props.upperRange}`}</p>
        <span id="row-buttons">
          <Button clickHandler={this.selectOption} text="+" id="add" />
        </span>
        <p id="row-name">{this.props.rowName}</p>
      </li>
    );
  }
}

export default TableRow;
