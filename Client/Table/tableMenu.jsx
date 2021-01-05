/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.currentTable,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.selectTable(this.state.value);
    });
  }

  render() {
    return (
      <form id="table-menu">
        <select
          onChange={this.handleChange}
          value={this.state.value}
          id="table-menu__select"
        >
          {this.props.menu.map((item) => {
            return (
              <option value={item.table} id="table-menu__item">
                {item.name}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}

export default Menu;
