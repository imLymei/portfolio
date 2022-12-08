'use client'

import Link from 'next/link';
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';

function Header() {
  const [visible, setVisible] = useState('0');
  const [handleNav, setHandleNav] = useState(false);

  useEffect(() => {
    const changeVisibility = () => {
      if(window.scrollY >= 400){
        setVisible('1')
        ;
      } else setVisible('0');
    }
    addEventListener('scroll',changeVisibility);
  })

  const changeNav = () => {
    setHandleNav(!handleNav);
  }

  const resetNav = () => {
    setHandleNav(false);
  }

  return (
    <header className='flex justify-center'>
      <div className='w-full max-w-[90vw] sm:max-w-[85vw] grid grid-cols-3 items-center gap-2 px-0 py-3 sm:p-10 fixed z-[1]'>
        <div className='relative'>
          <h1 className='headerText left-2 bottom-[-0.4rem]'>Felipe</h1>
          <h1 className='headerText left-[2.3rem] sm:left-[2.7rem] bottom-[0.4rem]'>Cardoso</h1>
        </div>
        <div className={handleNav?'mx-auto items-center sm:translate-y-[9rem] transition-all duration-200 ease-in-out':'mx-auto items-center sm:translate-y-0 transition-all duration-200 ease-in-out'}>
          <a href='#home' style={visible == 1?null:{pointerEvents: 'none'}} className='fixed arrow-middle bottom-8 sm:relative sm:inline' onClick={resetNav}>
            <ArrowUpIcon style={{opacity: `${visible}`}} className='headerIcon transition-opacity ease-in-out duration-500' />
          </a>
        </div>
        <div className='flex justify-end items-center'>
          <Bars3BottomRightIcon className='headerIcon cursor-pointer' onClick={changeNav} />
        </div>
      </div>
      <div className={handleNav?'bg-black/90 sm:bg-[#037171]/80 w-full h-[100vh] sm:h-[20vh] fixed translate-x-0 sm:translate-y-0 transition-all duration-200 ease-in-out flex':'bg-black/60 h-[100vh] w-full sm:h-[20vh] fixed z-0 translate-x-[100%] sm:translate-y-[-100%] transition-all duration-200 ease-in-out flex'}>
        <div></div>
      </div>
    </header>
  )
}

export default Header