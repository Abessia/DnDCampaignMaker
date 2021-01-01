/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import axios from 'axios';
import React from 'react';
import Table from './Table/table.jsx';
import Button from './Components/button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editorText: '',
      table: undefined,
      currentStep: undefined,
      rows: undefined,
      previous: undefined,
    };

    this.addOption = this.addOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetTable = this.resetTable.bind(this);
    this.nextTable = this.nextTable.bind(this);
    this.previousTable = this.previousTable.bind(this);
  }

  componentDidMount() {
    axios.get('api/table/adventure/adventureType')
      .then((response) => {
        this.setState(
          {
            table: response.data,
            rows: response.data.rows,
            currentStep: 'adventureType',
            previous: '',
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Editor change handler
  handleChange(event) {
    this.setState({ editorText: event.target.value });
  }

  // Button methods interacting with app.state
  addOption(string) {
    const currentText = this.state.editorText;
    this.setState(
      {
        editorText: currentText + string,
      }
    );
  }

  resetTable() {
    axios.get(`api/table/adventure/${this.state.currentStep}`)
      .then((response) => {
        this.setState({ rows: response.data.rows });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  nextTable(nextTable) {
    const newPrevious = this.state.currentStep;
    axios.get(`api/table/adventure/${nextTable}`)
      .then((response) => {
        this.setState({
          table: response.data,
          rows: response.data.rows,
          currentStep: response.data.step,
          previous: newPrevious,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  previousTable() {
    if (this.state.previous !== '') {
      console.log(`previous table identified: ${this.state.previous}`);
    } else {
      console.log('There is no previous table.');
    }
  }

  render() {
    if (this.state.table === undefined) {
      return (
        <h4> </h4>
      );
    }

    console.log('App Rendering with Rows: ', this.state.rows);

    return (
      <div id="grid-container">
        <Table
          id="table-component"
          addOption={this.addOption}
          resetTable={this.resetTable}
          nextButton={this.nextTable}
          previousButton={this.previousTable}
          table={this.state.table}
          rows={this.state.rows}
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
