'use client'

import Link from 'next/link';
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';

function Header() {
  const [visible, setVisible] = useState('0');

  useEffect(() => {
    const changeVisibility = () => {
      if(window.scrollY >= 400){
        setVisible('1')
        ;
      } else setVisible('0');
    }
    addEventListener('scroll',changeVisibility);
  })

  return (
    <header className='flex justify-center'>
      <div className='w-full max-w-[85vw] grid grid-cols-3 items-center p-10 fixed'>
        <div className='relative'>
        <h1 className='headerText relative left-2 bottom-[-0.4rem]'>Felipe</h1>
        <h1 className='headerText relative left-[2.7rem] bottom-[0.4rem]'>Cardoso</h1>
      </div>
      <div className='mx-auto items-center'>
        <a href='#home' style={visible == 1?null:{pointerEvents: 'none'}} className="hidden sm:inline">
          <ArrowUpIcon style={{opacity: `${visible}`}} className='headerIcon transition-opacity ease-in duration-400' />
        </a>
      </div>
      <div className='flex justify-end items-center'>
        <Bars3BottomRightIcon className='headerIcon cursor-pointer' />
      </div>
    </div>
    </header>
  )
}

export default Header