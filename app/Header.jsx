import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
      <header className='fixed p-0.5 flex flex-row bg-black text-center z-10'>
          <div className='w-32 p-3'>
              <Link href="/" className='hover:text-green-400 cursor-pointer'>HOME</Link>
          </div>
          <div className='w-32 p-3'>
              <Link href="./portfolio" className='hover:text-green-400 cursor-pointer'>PORTFOLIO</Link>
          </div>
          <div className='w-32 p-3'>
              <Link href="./project" className='hover:text-green-400 cursor-pointer'>PROJECTS</Link>
          </div>
      </header>
      <div className='fixed h-[53px] bg-black border-b-[1px] border-green-400 w-full z-[9]' />
    </>
  )
}

export default Header