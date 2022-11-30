import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='p-0.5 flex flex-row bg-black text-center'>
        <div className='w-32 p-3'>
            <Link href="/" className='hover:text-green-400 cursor-pointer'>HOME</Link>
        </div>
        <div className='w-32 p-3'>
            <Link href="./portfolio" className='hover:text-green-400 cursor-pointer'>PORTFOLIO</Link>
        </div>
    </header>
  )
}

export default Header