import React, { Component } from 'react';
import AppHeader from '../app-header';
import SeachPanel from '../seach-penal';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React', important: true, id: 1 },
        { label: 'That is so good', important: false, id: 2 },
        { label: 'I need a break...', important: false, id: 3 },
      ],
    };
    this.DeletItem = this.DeletItem.bind(this);
  }

  DeletItem(id) {
    this.stateState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SeachPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.DeletItem} />
        <PostAddForm />
      </div>
    );
  }
}
