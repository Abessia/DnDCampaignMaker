/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import axios from 'axios';
import React from 'react';
import Table from './Table/table.jsx';
// eslint-disable-next-line no-unused-vars
import Button from './Components/button.jsx';
import DisabledButton from './Components/disabledButton.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      adventureText: '',
      table: undefined,
      currentStep: undefined,
      rows: undefined,
      previous: undefined,
      next: undefined,
      highRange: undefined,
      menu: undefined,
    };

    this.addOption = this.addOption.bind(this);
    this.selectTable = this.selectTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetTable = this.resetTable.bind(this);
    this.nextTable = this.nextTable.bind(this);
    this.previousTable = this.previousTable.bind(this);
    this.roll = this.roll.bind(this);
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
            highRange: response.data.highRange,
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get('api/table/adventure/adventureMenu')
      .then((response) => {
        console.log(response);
        this.setState({ menu: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Editor change handler
  handleChange(event) {
    this.setState({ adventureText: event.target.value });
  }

  // Button methods interacting with app.state
  addOption(string, nextTable) {
    const currentText = this.state.adventureText;
    this.setState(
      {
        adventureText: currentText + string,
        next: nextTable,
      }, () => {
        console.log('Next Table set to ', this.state.next);
      }
    );
  }

  selectTable(tableName) {
    this.setState({ next: tableName }, () => {
      console.log('Table Selected: ', this.state.next);
      this.nextTable();
    });
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

    return { res: result, roll: currentRoll };
  }

  nextTable() {
    const newPrevious = this.state.currentStep;
    axios.get(`api/table/adventure/${this.state.next}`)
      .then((response) => {
        this.setState({
          table: response.data,
          rows: response.data.rows,
          currentStep: response.data.step,
          previous: newPrevious,
          next: '',
          highRange: response.data.highRange,
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
    if (this.state.table === undefined || this.state.menu === undefined) {
      return (
        <h4> </h4>
      );
    }

    return (
      <div id="grid-container">

        <div id="main-nav">
          <span className="main-nav__item">Campaign</span>
          <span className="main-nav__item">Heroes</span>
          <span className="main-nav__item">Adventure</span>
          <span className="main-nav__item">NPC</span>
          <span className="main-nav__item">Location</span>
          <span className="main-nav__item">Encounter</span>
          <span className="main-nav__item">Rewards</span>
        </div>

        <Table
          id="table-component"
          roll={this.roll}
          selectTable={this.selectTable}
          addOption={this.addOption}
          resetTable={this.resetTable}
          nextTable={this.nextTable}
          previousTable={this.previousTable}
          table={this.state.table}
          rows={this.state.rows}
          next={this.state.next}
          highestRange={this.state.highRange}
          menu={this.state.menu}
          currentTable={this.state.currentStep}
        />

        <div id="editor-component">
          <h2 id="editor-title">Campaign Document</h2>
          <div id="editor-nav">
            <span className="editor-nav__item">Campaign</span>
            <span className="editor-nav__item">Heroes</span>
            <span className="editor-nav__item" id="editor-nav__selected">Adventures</span>
            <span className="editor-nav__item">NPCs</span>
            <span className="editor-nav__item">Locations</span>
            <span className="editor-nav__item">Encounters</span>
            <span className="editor-nav__item">Rewards</span>
          </div>
          <div id="text-editor">
            <textarea
              id="text-box"
              rows="30"
              cols="75"
              placeholder="Input campaign text here..."
              value={this.state.adventureText}
              onChange={this.handleChange}
            />
          </div>
          <DisabledButton
            clickHandler={() => { console.log(this.state.adventureText); }}
            text="Export"
          />
        </div>

        <div className="footer">
          <h4 id="footer-attribution">
            Tables for this Campaign Creator come from the 5th Edition <i>Dungeon Master&apos;s Guide</i> by Wizard&apos;s of the Coast, 2014
          </h4>
          <p>
            To purchase the <i>Dungeon Master&apos;s Guide</i> go to the marketplace at: <a id="dndbeyond-link" href="https://www.dndbeyond.com/marketplace">DnDBeyond.com</a>
          </p>
          <p>Created by <a id="github-link" href="https://github.com/Abessia">Rebecca Wiegel</a></p>
        </div>

      </div>
    );
  }
}

export default App;
