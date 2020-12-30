/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import TextEditor from './textEditor.jsx';
import Button from '../Components/button.jsx';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: this.props.editorText,
      update: this.props.update,
    };
  }

  render() {
    return (
      <div>
        <h2>Campaign Document</h2>
        <TextEditor
          text={this.state.editorText}
          update={this.state.update}
        />
        <Button
          clickHandler={() => { console.log(this.state.editorText); }}
          text="Export"
        />
      </div>
    );
  }
}

export default Editor;
