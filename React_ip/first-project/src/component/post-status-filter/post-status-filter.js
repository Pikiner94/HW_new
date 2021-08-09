import React, { Component } from 'react';
import ButtonsFilter from '../buttons-filter/buttons-filter';

export default class PostStatusFilter extends Component {
  render() {
    const { filterChange, filter } = this.props;
    return (
      <div className="btn-group">
        <ButtonsFilter filter={filter} filterChange={filterChange} />
      </div>
    );
  }
}
