import React from 'react';
import './app-header.css';

const AppHeader = ({ allPost, countLike }) => {
  return (
    <div className="app-header d-flex">
      <h1> Pikiner Yevgeniy</h1>
      <h2>
        {allPost} записей, из них понравилось {countLike}
      </h2>
    </div>
  );
};

export default AppHeader;
