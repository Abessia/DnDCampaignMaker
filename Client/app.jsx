/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Table from './Table/table.jsx';
import Button from './Components/button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editorText: '',
      table: {
        title: 'Where Does Your Adventure Take Place?',
        description: 'Adventures set in crumbling dungeons and remote wilderness locations are the cornerstone of countless campaigns',
        step: 'Adventure-Location',
        rows: [
          {
            lowRange: 0,
            highRange: 33,
            name: 'The Wilderness',
            details: '',
            suggestedAdd: 'This adventure focuses on the wilderness.',
          },
          {
            lowRange: 34,
            highRange: 66,
            name: 'The Dungeon',
            details: '',
            suggestedAdd: 'This adventure focuses on a dungeon.',
          },
          {
            lowRange: 67,
            highRange: 100,
            name: 'Other Location',
            details: '',
            suggestedAdd: 'This adventure focuses on a location other than the wilds or a dungeon.',
          }
        ],
      },
    };

    this.addOption = this.addOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        editorText: event.target.value,
      }
    );
  }

  addOption(string) {
    const currentText = this.state.editorText;
    this.setState(
      {
        editorText: currentText + string,
      }
    );
  }

  render() {
    return (
      <div id="grid-container">
        <Table
          id="table-component"
          addOption={this.addOption}
          table={this.state.table}
        />

        <div id="editor-component">
          <h2>Campaign Document</h2>
          <div id="text-editor">
            <textarea
              id="text-box"
              rows="30"
              cols="75"
              placeholder="Input campaign text here..."
              value={this.state.editorText}
              onChange={this.handleChange}
            />
          </div>
          <Button
            clickHandler={() => { console.log(this.state.editorText); }}
            text="Export"
          />
        </div>
      </div>
    );
  }
}

export default App;
