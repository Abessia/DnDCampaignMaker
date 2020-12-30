/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import TableRows from './tableRows.jsx';
import TableHeader from './tableHeader.jsx';
import Button from '../Components/button.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRows: this.props.table.rows,
    };

    this.resetTable = this.resetTable.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  resetTable() {
    this.setState(
      { currentRows: this.props.table.rows },
    );
  }

  removeOption(index) {
    console.log(this.state.currentRows);
    const rows = this.state.currentRows.slice();
    rows.splice(index, 1);
    this.setState(
      { currentRows: rows },
    );
  }

  render() {
    return (
      <div>
        <h2>Campaign Options</h2>
        <div id="table">
          <h4 id="table-title">{this.props.table.title}</h4>
          <p id="table-description">{this.props.table.description}</p>
          <TableHeader
            addOption={this.props.addOption}
            rows={this.state.currentRows}
          />
          <TableRows
            addOption={this.props.addOption}
            removeOption={this.removeOption}
            rows={this.state.currentRows}
          />
        </div>
        <Button text="Reset Table" clickHandler={this.resetTable} />
      </div>
    );
  }
}

export default Table;
