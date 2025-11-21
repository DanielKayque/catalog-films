import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({ item, Icon }) => {
  let path = '';
  switch (item) {
    case 'HOME':
      path = '/';
      break;
    case 'FILMES':
      path = '/filmes';
      break;
    case 'SERIES':
      path = '/series';
      break;
  }

  return (
    <Link to={path} className="flex gap-2 justify-center items-center">
      <Icon />
      <h2>{item}</h2>
    </Link>
  );
};

export default HeaderItem;
