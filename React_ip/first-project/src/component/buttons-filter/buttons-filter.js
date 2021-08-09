import React, { Component } from 'react';
import './buttons-filter.css';

export default class ButtonsFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: [
        { name: 'All', label: 'Все', id: 1 },
        { name: 'Like', label: 'Понравились', id: 2 },
      ],
    };
    this.filterUpdateStatus = this.filterUpdateStatus.bind(this);
  }

  filterUpdateStatus(e) {
    this.state.button.forEach(({ label, name }) => {
      if (e.target.innerText === label) {
        this.props.filterChange(name);
      }
    });
  }

  render() {
    const { filter } = this.props;
    const buttons = this.state.button.map(({ name, label, id }) => {
      let classNames =
        name === filter ? 'btn btn-info' : 'btn btn-outline-secondary';
      return (
        <button
          key={id}
          className={classNames}
          onClick={this.filterUpdateStatus}
        >
          {label}
        </button>
      );
    });
    return buttons;
  }
}
