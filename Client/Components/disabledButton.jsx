/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class DisabledButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  render() {
    return (
      <div id="basic-button">
        <button type="button" disabled onClick={() => {}}>{this.state.text}</button>
      </div>
    );
  }
}

export default DisabledButton;
