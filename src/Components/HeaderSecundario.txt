import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import HeaderItem from './HeaderItem';
import { IoMenu } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdStar } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { FiTv } from 'react-icons/fi';
import Logo from '../images/logo.svg'

const HeaderSecundario = () => {
  const [modal, setModal] = useState(false);

  const menu = [
    {
      name: 'HOME',
      icon: IoMdHome,
    },
    {
      name: 'SEARCH',
      icon: FaSearch,
    },
    {
      name: 'WATCHLIST',
      icon: IoMdAdd,
    },
    {
      name: 'ORIGINALS',
      icon: IoMdStar,
    },
    {
      name: 'MOVIES',
      icon: MdLocalMovies,
    },
    {
      name: 'SERIES',
      icon: FiTv,
    },
  ];
  return (
    <header
      className={`${
        modal ? 'pb-24' : 'h-[60px]'
      } flex justify-between z-20 p-8 items-center shadow-md shadow-gray-950 gap-4 w-full`}
    >
      <button className="md:hidden relative" onClick={() => setModal(!modal)}>
        <IoMenu
          className={`${
            modal ? 'rotate-90' : 'rotate-0'
          } transition-transform duration-300`}
        />
      </button>
      <nav
        className={`${
          modal ? 'flex' : 'hidden'
        } absolute top-20 left-0 right-0 md:flex flex-col md:flex-row md:gap-4 md:static`}
      >
        <div>
          <img src={Logo} className='w-[80px] object-cover ' alt="" />
        </div>
        {menu.map((item, index) => (
          <HeaderItem key={index} item={item.name} Icon={item.icon} />
        ))}
      </nav>
      <h2 className="flex items-center gap-2">
        <FaUserAlt />
        Usuário
      </h2>
    </header>
  );
};

export default HeaderSecundario;
