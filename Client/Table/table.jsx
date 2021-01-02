/* eslint-disable react/no-unused-state */
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
      currentRows: this.props.rows,
    };

    this.previousTable = this.props.previousButton;
    this.resetTable = this.props.resetTable;
    this.nextTable = this.props.nextButton;
    this.handleNext = this.handleNext.bind(this);
    // this.removeOption = this.removeOption.bind(this);
  }

  handleNext() {
    if (this.props.next === undefined) {
      console.log('next is undefined');
    } else {
      this.nextTable();
    }
  }

  /* removeOption(index) {
    const rows = this.state.currentRows.slice();

    // adjust the ranges for subsequent random rolls (+1 for inclusive of lowRange)
    const range = (rows[index].highRange - rows[index].lowRange + 1);

    for (let i = rows.length - 1; i > index; i--) {
      // console.log(`Prior range ${rows[i].lowRange} to ${rows[i].highRange}`);
      rows[i].highRange = rows[i].highRange - range;
      rows[i].lowRange = rows[i].lowRange - range;
      // console.log(`New range ${rows[i].lowRange} to ${rows[i].highRange}`);
    }

    // Delete the option selected for removal from the table rows
    rows.splice(index, 1);
    this.setState(
      { currentRows: rows.slice() },
    );
  } */

  render() {
    return (
      <div>
        <h2>Campaign Options</h2>
        <div id="table">
          <h4 id="table-title">{this.props.table.title}</h4>
          <p id="table-description">{this.props.table.description}</p>
          <TableHeader
            addOption={this.props.addOption}
            roll={this.props.roll}
          />
          <TableRows
            addOption={this.props.addOption}
            // removeOption={this.removeOption}
            rows={this.props.rows}
          />
        </div>
        <Button text="Previous" clickHandler={this.previousTable} />
        <Button text="Reset Table" clickHandler={this.resetTable} />
        <Button text="Next" clickHandler={this.handleNext} />
      </div>
    );
  }
}

export default Table;
