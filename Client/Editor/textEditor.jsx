/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.text,
      updateText: this.props.update,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.state.updateText(event.target.value);
  }

  render() {
    return (
      <div id="text-editor">
        <textarea
          id="text-box"
          rows="30"
          cols="75"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextEditor;
