import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import HeaderItem from './HeaderItem';
import { IoMenu } from 'react-icons/io5';
import { IoMdAdd, IoMdStar } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { FiTv } from 'react-icons/fi';

const Header = () => {
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
    <nav className={`h-[80px] mb-8 px-8 flex justify-between items-center `}>
      <button
        onClick={() => setModal(!modal)}
        className={`md:hidden block relative `}
      >
        <IoMenu
          className={`${
            modal ? 'rotate-90' : 'rotate-0'
          } transition-transform duration-300`}
        />
      </button>
      <div className="h-auto flex ">
        <img
          src="https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-5.png"
          className="w-[80px] md:block mr-14 h-auto object-contain "
          alt=""
        />
        <div className={`${modal ? 'flex' : 'hidden'} md:flex md:flex-row animeLeft flex-col absolute z-10 bg-[#020713] h-auto rounded-lg pb-8 md:pb-0 top-[70px] pl-3 left-0 items-start md:items-center gap-6 md:gap-6 md:static lg:items-center`}>
          {menu.map((item, index) => (
            <HeaderItem key={index} item={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>

      <div className="w-[50px]">
        <img
          className="w-[50px] rounded-[50%]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtYeqKoe-cnPb0IdN8Qmuc9IUre8fap4OgQ&s"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
