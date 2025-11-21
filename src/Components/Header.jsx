import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdMovieCreation } from 'react-icons/md';
import { SiSteelseries } from 'react-icons/si';
import HeaderItem from './HeaderItem';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [modal, setModal] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: IoMdHome,
    },
    {
      name: 'FILMES',
      icon: MdMovieCreation,
    },
    {
      name: 'SÉRIES',
      icon: SiSteelseries,
    },
  ];
  return (
    <header
      className={`${modal ? 'pb-24' : 'h-[60px]'} flex justify-center p-8 items-center shadow-sm shadow-black gap-4 w-full`}
    >
      <h2>
        <span className="text-blue-600">Niel</span>Films
      </h2>
      <button className="md:hidden relative" onClick={() => setModal(!modal)}>
        <IoMenu/>
      </button>
      <nav
        className={`${
          modal ? 'flex' : 'hidden'
        } absolute top-20 left-0 right-0 flex-col md:flex-row md:gap-4 md:static`}
      >
        {menu.map((item, index) => (
          <HeaderItem key={index} item={item.name} Icon={item.icon} />
        ))}
      </nav>
      <h2>Usuario</h2>
    </header>
  );
};

export default Header;
