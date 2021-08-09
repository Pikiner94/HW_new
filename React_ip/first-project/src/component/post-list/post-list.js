import React, { Component } from 'react';
import PostListItem from '../post-list-item';
import './post-list';

export default class PostList extends Component {
  render() {
    const { posts, onDelete, onToggleImportant, onToggleLiked } = this.props;
    return (
      <ul className="app-list list-group">
        <PostListItem
          posts={posts}
          onDelete={onDelete}
          onToggleImportant={onToggleImportant}
          onToggleLiked={onToggleLiked}
        />
      </ul>
    );
  }
}
