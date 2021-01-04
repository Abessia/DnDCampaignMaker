/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickHandler: this.props.clickHandler,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.state.clickHandler();
  }

  render() {
    return (
      <div id="basic-button">
        <button
          type="button"
          onClick={this.handleClick}
          id={this.props.id}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
