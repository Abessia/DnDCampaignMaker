/* eslint-disable react/sort-comp */
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
import Login from './Authentication/login.jsx';
import DisabledButton from './Components/disabledButton.jsx';
import Button from './Components/button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      campaign: '',
      hero: '',
      adventure: '',
      npc: '',
      location: '',
      encounter: '',
      rewards: '',
      currentText: undefined,
      currentTab: undefined,
      table: undefined,
      currentStep: undefined,
      rows: undefined,
      next: undefined,
      highRange: undefined,
      menu: undefined,
      needsLogin: false,
      dmg: false,
    };

    this.validateUser = this.validateUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.initialize = this.initialize.bind(this);
    this.addOption = this.addOption.bind(this);
    this.selectTable = this.selectTable.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.nextTable = this.nextTable.bind(this);
    this.roll = this.roll.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('userToken')) {
      console.log('User Token Not Found');
      this.setState({
        needsLogin: true,
      });
    } else {
      const currentUser = localStorage.getItem('userToken');
      // eslint-disable-next-line dot-notation
      // eslint-disable-next-line quote-props
      axios.get('api/authenticate', { headers: { 'Authorization': `Bearer ${currentUser}` } })
        .then((response) => {
          console.log('Token Validated', response);
          this.setState({
            dmg: response.data.dmg,
          }, () => {
            this.initialize();
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            needsLogin: true,
          });
        });
    }
  }

  // Login / Signup / Logout methods
  // eslint-disable-next-line class-methods-use-this
  validateUser({ username, password }) {
    axios.post('api/login', { username, password })
      .then((res) => {
        localStorage.setItem('userToken', res.data);
        this.initialize();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createUser({ username, password, emailAddress }) {
    axios.post('api/signup', { username, password, emailAddress })
      .then((res) => {
        localStorage.setItem('userToken', res.data);
        this.initialize();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logoutUser() {
    const token = localStorage.getItem('userToken');
    axios.post('api/logout', { token })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem('userToken');
        this.setState({
          needsLogin: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initialize() {
    axios.get('api/table/adventure/adventureStart')
      .then((res) => {
        this.setState(
          {
            table: res.data,
            rows: res.data.rows,
            currentText: this.state.adventure,
            currentTab: 'adventure',
            currentStep: 'adventureStart',
            highRange: res.data.highRange,
            needsLogin: false,
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('api/table/adventure/adventureMenu')
      .then((res) => {
        this.setState({ menu: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Editor methods interacting with app.state
  handleTextChange(event) {
    this.setState({ currentText: event.target.value });
  }

  changeTab(value) {
    let tabname;
    if (typeof value === 'string') { // if it is passed in as a string
      tabname = value;
    } else { // if it passed in from a button click
      tabname = value.target.value;
    }

    tabname = tabname.toLowerCase();

    // Save the current text to its appropriate state
    const savedText = this.state.currentText;
    const savedTab = this.state.currentTab;
    let newText;

    // LOAD the text from the appropriate app.state (tabname)
    if (tabname === 'campaign') {
      newText = this.state.campaign;
    } else if (tabname === 'hero') {
      newText = this.state.hero;
    } else if (tabname === 'adventure') {
      newText = this.state.adventure;
    } else if (tabname === 'npc') {
      newText = this.state.npc;
    } else if (tabname === 'location') {
      newText = this.state.location;
    } else if (tabname === 'encounter') {
      newText = this.state.encounter;
    } else if (tabname === 'rewards') {
      newText = this.state.rewards;
    }

    // GET request the Table & Menu (table)
    axios.get(`api/table/${tabname}/${tabname}Start`)
      .then((response) => {
        this.setState(
          {
            table: response.data,
            rows: response.data.rows,
            currentTab: `${tabname}`,
            currentStep: `${tabname}Start`,
            currentText: newText,
            highRange: response.data.highRange,
          },
          () => {
            // SAVE the prior text to the appropriate app.state (savedTab)
            if (savedTab === 'campaign') {
              this.setState({ campaign: savedText });
            } else if (savedTab === 'hero') {
              this.setState({ hero: savedText });
            } else if (savedTab === 'adventure') {
              this.setState({ adventure: savedText });
            } else if (savedTab === 'npc') {
              this.setState({ npc: savedText });
            } else if (savedTab === 'location') {
              this.setState({ location: savedText });
            } else if (savedTab === 'encounter') {
              this.setState({ encounter: savedText });
            } else if (savedTab === 'rewards') {
              this.setState({ rewards: savedText });
            }
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get(`api/table/${tabname}/${tabname}Menu`)
      .then((response) => {
        this.setState({ menu: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Table methods interacting with app.state
  addOption(string, nextTable) {
    if (string === 'subtable') {
      this.setState({ next: nextTable }, () => {
        this.nextTable();
      });
    } else {
      const text = this.state.currentText;
      this.setState(
        {
          currentText: text + string,
          next: nextTable,
        },
      );
    }
  }

  selectTable(tableName) {
    this.setState({ next: tableName }, () => {
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
    if (this.state.needsLogin === true) {
      return (
        <div id="grid-container">

          <div id="main-nav">
            <DisabledButton className="main-nav__item" id="main-nav__new" text="New Campaign" />
            <DisabledButton className="main-nav__item" id="main-nav__save" text="Save" />
            <DisabledButton className="main-nav__item" id="main-nav__load" text="Load" />
            <DisabledButton className="main-nav__item" id="main-nav__export" text="Export" />
            <DisabledButton className="main-nav__item" id="main-nav__logout" text="Logout" />
          </div>
          <Login validateUser={this.validateUser} createUser={this.createUser} />
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

    if (this.state.table === undefined || this.state.menu === undefined) {
      return (
        <h4> </h4>
      );
    }

    if (this.state.dmg === false) {
      return (
        <div id="grid-container">

          <div id="main-nav">
            <DisabledButton className="main-nav__item" id="main-nav__new" text="New Campaign" />
            <DisabledButton className="main-nav__item" id="main-nav__save" text="Save" />
            <DisabledButton className="main-nav__item" id="main-nav__load" text="Load" />
            <DisabledButton className="main-nav__item" id="main-nav__export" text="Export" />
            <DisabledButton className="main-nav__item" id="main-nav__logout" text="Logout" />
          </div>
          <h1>You do not have permission to use the DMG</h1>
          <Login validateUser={this.validateUser} createUser={this.createUser} />
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

    return (
      <div id="grid-container">

        <div id="main-nav">
          <DisabledButton className="main-nav__item" id="main-nav__new" text="New Campaign" />
          <DisabledButton className="main-nav__item" id="main-nav__save" text="Save" />
          <DisabledButton className="main-nav__item" id="main-nav__load" text="Load" />
          <DisabledButton className="main-nav__item" id="main-nav__export" text="Export" />
          <Button className="main-nav__item" id="main-nav__logout" text="Logout" clickHandler={this.logoutUser} />
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
          updateText={this.handleTextChange}
          changeTab={this.changeTab}
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
