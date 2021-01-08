/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Button from '../Components/button.jsx';
import DisabledButton from '../Components/disabledButton.jsx';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.rollHandler = this.rollHandler.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    if (this.props.next === undefined || this.props.next === '') {
      console.log('Next is undefined');
    } else {
      this.props.nextTable();
    }
  }

  rollHandler() {
    const result = this.props.roll();

    if (result.res === undefined) {
      console.log('Error in Result of Roll');
    } else if (result.res.suggestedAdd === '') {
      if (confirm(`You rolled a(n) ${result.roll}.\nThis will take you to the subtable for "${result.res.name}" for further detail.\nIs that ok?`)) {
        this.props.addOption(result.res.suggestedAdd, result.res.next);
      }
    } else if (confirm(`You rolled a(n) ${result.roll}.\nThis will add "${result.res.name}" to your campaign.\nIs that ok?`)) {
      this.props.addOption(result.res.suggestedAdd, result.res.next);
    }
  }

  render() {
    return (
      <div id="table-header">
        <div id="header-row">
          <Button clickHandler={this.rollHandler} id="roll-button" text={`Roll 1d${this.props.highestRange}`} />
          <span id="option-header">
            <DisabledButton text="Previous" clickHandler={this.props.previousTable} id="previous-button" />
            <DisabledButton text="Reset Table" clickHandler={this.props.resetTable} id="reset-button" />
            <Button text="Next" clickHandler={this.handleNext} id="next-button" />
          </span>
        </div>
      </div>
    );
  }
}

export default TableHeader;
