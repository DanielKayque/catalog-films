import React from 'react';

const HeaderItem = ({ item, Icon }) => {
  return (
    <div className="flex justify-center items-center">
      <Icon />
      <h2>{item}</h2>
    </div>
  );
};

export default HeaderItem;
