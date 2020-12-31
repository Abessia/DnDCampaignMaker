/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
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
    const rows = this.state.currentRows.slice();
    console.log(rows);

    // adjust the ranges for subsequent random rolls (+1 for inclusive of lowRange)
    const range = (rows[index].highRange - rows[index].lowRange + 1);
    console.log(range);

    for (let i = rows.length - 1; i > index; i--) {
      console.log(`Prior range ${rows[i].lowRange} to ${rows[i].highRange}`);
      rows[i].highRange = rows[i].highRange - range;
      rows[i].lowRange = rows[i].lowRange - range;
      console.log(`New range ${rows[i].lowRange} to ${rows[i].highRange}`);
    }

    // Delete the option selected for removal from the table rows
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
