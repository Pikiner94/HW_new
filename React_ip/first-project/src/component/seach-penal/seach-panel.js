import React, { Component } from 'react';
import './search-panel.css';

export default class SeachPanel extends Component {
  constructor(props) {
    super(props);
    this.onInputValue = this.onInputValue.bind(this);
  }

  onInputValue(e) {
    const term = e.target.value;
    this.props.changeTerm(term.toLowerCase());
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onInputValue}
      />
    );
  }
}
