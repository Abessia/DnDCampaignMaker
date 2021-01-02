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

    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    const result = this.props.roll();

    if (result.res === undefined) {
      console.log('Error in Result of Roll');
    } else if (confirm(`You rolled a(n) ${result.roll}.\nThis will add "${result.res.name}" to your campaign.\nIs that ok?`)) {
      // Add the suggestedAdd to the campaign document
      this.props.addOption(result.res.suggestedAdd);
    }
  }

  render() {
    return (
      <div id="table-header">
        <div id="header-row">
          <Button clickHandler={this.rollHandler} id="roll-button" text="Roll" />
          <p id="option-header">Option</p>
          <p id="description-header">Range</p>
        </div>
      </div>
    );
  }
}

export default TableHeader;
