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
    <Link
      to={path}
      className="flex mr-4 gap-1 md:text-2xl lg:text-[16px] justify-center items-center"
    >
      <Icon />
      <h2 className="block md:hidden lg:block">{item}</h2>
    </Link>
  );
};

export default HeaderItem;
