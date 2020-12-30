/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Button from '../Components/button.jsx';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.props.rows,
      addOption: this.props.addOption,
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    let lowestRange = this.state.rows[0].lowRange;
    let highestRange = this.state.rows[0].highRange;

    for (let i = 1; i < this.state.rows.length; i++) {
      if (this.state.rows[i].lowRange < lowestRange) {
        lowestRange = this.state.rows[i].lowRange;
      }
      if (this.state.rows[i].highRange > highestRange) {
        highestRange = this.state.rows[i].highRange;
      }
    }

    const currentRoll = Math.floor((Math.random() * (highestRange - lowestRange)) + lowestRange);
    let result;
    for (let j = 0; j < this.state.rows.length; j++) {
      if (currentRoll >= this.state.rows[j].lowRange
        && currentRoll <= this.state.rows[j].highRange) {
        result = this.state.rows[j];
      }
    }

    // Confirm the suggested option with the user
    if (result === undefined) {
      console.log('Error in Result of Roll');
    } else if (confirm(`You rolled a  ${currentRoll}.\nThis will add ${result.name} to your campaign.\nIs that ok?`)) {
      // Add the suggestedAdd to the campaign document
      this.state.addOption(result.suggestedAdd);
    }
  }

  render() {
    return (
      <div id="table-header">
        <div id="header-row">
          <Button clickHandler={this.roll} id="roll-button" text="Roll" />
          <p id="option-header">Option</p>
          <p id="description-header">Description</p>
        </div>
      </div>
    );
  }
}

export default TableHeader;
