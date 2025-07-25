import React from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ openSidebar }) => {
  return (
    <div className='flex bg-white'>
      <div className='flex items-center gap-2 p-4 relative'>
        <Image
          src="/icon/logo.svg"
          alt="Logo"
          width={50}
          height={100}
        />
        <h1 className='text-2xl font-bold text-black hidden md:block'>Kiekky</h1>
      </div>

      <div className="ml-auto flex items-center gap-6 p-6">
        <SearchBar />

        <Link href="/Notification">
          <Image
            src="/icon/bell.svg"
            alt="bell icon"
            width={30}
            height={30}
            className='cursor-pointer hidden md:block'
          />
        </Link>
        
        <div>
          <Image
            src="/icon/menu.svg"
            alt="menu icon"
            width={35}
            height={35}
            className='cursor-pointer block md:hidden'
            onClick={openSidebar}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
