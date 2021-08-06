import React, { Component } from 'react';
import './post-status-filter';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: [
        { name: 'All', label: 'Все', id: 1 },
        { name: 'Like', label: 'Понравились', id: 2 },
      ],
      filter: 'All',
    };
    this.filterUpdateStatus = this.filterUpdateStatus.bind(this);
    this.createButton = this.createButton.bind(this);
  }

  createButton() {
    const button = this.state.button.map((elem) => {
      let clazzName =
        elem.name === this.state.filter
          ? 'btn btn-info'
          : 'btn btn-outline-secondary';
      return (
        <button key={elem.id} className={clazzName}>
          {elem.label}
        </button>
      );
    });
    return button;
  }

  filterUpdateStatus(e) {
    this.state.button.forEach(({ label, name }) => {
      if (e.target.innerText === label) {
        this.props.filterChange(name);

        this.setState(({ filter }) => {
          return {
            filter: name,
          };
        });
      }
    });
  }

  render() {
    const buttons = this.createButton();
    return (
      <div className="btn-group" onClick={this.filterUpdateStatus}>
        {buttons}
      </div>
    );
  }
}
