import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  render() {
    const { onDelete, onToggleImportant, onToggleLiked, posts } = this.props;

    const liCreateItem = posts.map(({ id, label, like, important }) => {
      let classNames = 'app-list-item d-flex justify-content-between';

      if (like) {
        classNames += ' like';
      } else if (important) {
        classNames += ' important';
      }
      return (
        <li key={id} className="list-group-item">
          <div className={classNames}>
            <span
              className="app-list-item-label"
              onClick={() => onToggleLiked(id)}
            >
              {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn-star btn-sm"
                onClick={() => onToggleImportant(id)}
              >
                <i className="fa fa-star"></i>
              </button>
              <button
                type="button"
                className="btn-trash btn-sm"
                onClick={() => onDelete(id)}
              >
                <i className="fa fa-trash-o"></i>
              </button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </li>
      );
    });
    return liCreateItem;
  }
}
