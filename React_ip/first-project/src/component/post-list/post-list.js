import React from 'react';
import PostListItem from '../post-list-item';
import './post-list';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((elem) => {
    const { id, ...elemOthers } = elem;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...elemOthers}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
