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
        { label: 'Going to learn React', important: false, like: false, id: 1 },
        { label: 'That is so good', important: false, like: false, id: 2 },
        { label: 'I need a break...', important: false, like: false, id: 3 },
      ],
      term: '',
      filter: 'All',
    };

    this.DeletItem = this.DeletItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.maxId = 4;
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const newArr = data.map((elem) => {
        if (elem.id === id) {
          elem.important = !elem.important;
        }
        return elem;
      });
      return {
        data: newArr,
      };
    });
  }

  changeTerm(input) {
    this.setState(({ term }) => {
      return {
        term: input,
      };
    });
  }

  filterChange(filter) {
    this.setState({ filter });
  }

  updatePost(items, seachword) {
    if (seachword.length === 0) {
      return items;
    } else {
      return items.filter(({ label }) =>
        label.toLowerCase().includes(seachword)
      );
    }
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const newArr = data.map((elem) => {
        if (elem.id === id) {
          elem.like = !elem.like;
        }
        return elem;
      });
      return { data: newArr };
    });
  }

  DeletItem(id) {
    this.setState(({ data }) => {
      const dataNew = data.filter((elem) => elem.id !== id);
      return {
        data: dataNew,
      };
    });
  }

  addItem(body) {
    const newArr = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newData = [...data, newArr];
      return {
        data: newData,
      };
    });
  }

  render() {
    const { data, term, filter } = this.state;
    const allPost = data.length;
    const countLike = data.filter((elem) => elem.like === true).length;

    const visiblePost = this.updatePost(data, term);
    const dataItems = visiblePost.filter((elem) => {
      if (filter === 'Like') {
        return elem.like === true;
      }
      return elem;
    });

    return (
      <div className="app">
        <AppHeader allPost={allPost} countLike={countLike} />
        <div className="search-panel d-flex">
          <SeachPanel changeTerm={this.changeTerm} />
          <PostStatusFilter filterChange={this.filterChange} />
        </div>
        <PostList
          allPost={allPost}
          posts={dataItems}
          onDelete={this.DeletItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
