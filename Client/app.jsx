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
import Editor from './Editor/editor.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editorText: {
        campaignText: '',
        heroText: '',
        adventureText: '',
        npcText: '',
        locationText: '',
        encounterText: '',
        rewardsText: '',
      },
      currentText: undefined,
      currentTab: undefined,
      table: undefined,
      currentStep: undefined,
      rows: undefined,
      next: undefined,
      highRange: undefined,
      menu: undefined,
    };

    this.addOption = this.addOption.bind(this);
    this.selectTable = this.selectTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.nextTable = this.nextTable.bind(this);
    this.roll = this.roll.bind(this);
  }

  componentDidMount() {
    axios.get('api/table/adventure/adventureType')
      .then((response) => {
        this.setState(
          {
            table: response.data,
            rows: response.data.rows,
            currentText: this.state.editorText.adventureText,
            currentTab: 'adventure',
            currentStep: 'adventureType',
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
    this.setState({ currentText: event.target.value });
  }

  // Button methods interacting with app.state
  addOption(string, nextTable) {
    if (string === '') {
      this.setState({ next: nextTable }, () => {
        this.nextTable();
      });
    } else {
      const text = this.state.currentText;
      this.setState(
        {
          currentText: text + string,
          next: nextTable,
        }, () => {
          console.log('Next Table set to ', this.state.next);
        }
      );
    }
  }

  selectTable(tableName) {
    this.setState({ next: tableName }, () => {
      console.log('Table Selected: ', this.state.next);
      this.nextTable();
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
    axios.get(`api/table/${this.state.currentTab}/${this.state.next}`)
      .then((response) => {
        this.setState({
          table: response.data,
          rows: response.data.rows,
          currentStep: response.data.step,
          next: '',
          highRange: response.data.highRange,
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
          <span className="main-nav__item" id="main-nav__campaign">Campaign</span>
          <span className="main-nav__item" id="main-nav__hero">Hero</span>
          <span className="main-nav__item" id="main-nav__adventure">Adventure</span>
          <span className="main-nav__item" id="main-nav__npc">NPC</span>
          <span className="main-nav__item" id="main-nav__location">Location</span>
          <span className="main-nav__item" id="main-nav__encounter">Encounter</span>
          <span className="main-nav__item" id="main-nav__rewards">Rewards</span>
        </div>

        <Table
          id="table-component"
          roll={this.roll}
          selectTable={this.selectTable}
          addOption={this.addOption}
          nextTable={this.nextTable}
          table={this.state.table}
          rows={this.state.rows}
          next={this.state.next}
          highestRange={this.state.highRange}
          menu={this.state.menu}
          currentTable={this.state.currentStep}
        />

        <Editor
          text={this.state.currentText}
          selectedTab={this.state.currentTab}
          updateText={this.handleChange}
        />

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
