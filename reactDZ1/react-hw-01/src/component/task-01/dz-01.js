import React from 'react';
import './css/dz-01.css';

function Profile(user) {
  const Array = Object.values(user).map(
    ({ name, avatar, location, tag, stats }) => {
      let count = 1;
      return (
        <div className="name" key={++count}>
          <div className="description">
            <img src={avatar} alt="Аватар пользователя" className="avatar" />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>
          <ul className="stats">
            <li key={++count}>
              <span className="label">Followers</span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li key={(++count).toString()}>
              <span className="label">Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li key={(++count).toString()}>
              <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      );
    }
  );
  return Array;
}

export { Profile };
