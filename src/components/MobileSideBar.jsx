import { navItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileSideBar = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-[60%] max-w-xs bg-white p-6 shadow-xl flex flex-col gap-6 z-50">
 
      {/* Close Button */}
      <div className="flex items-center justify-between">
        <Image
            src="/icon/logo.svg"
            alt="Logo"
            width={50}
            height={50}
        />
        
        <Image
          src="/icon/close.svg"
          alt="Close Menu"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>
 
      {/* Navigation Items */}
      <ul className="flex flex-col gap-4">
        {navItems.map(({ url, name, icon }) => (
          <li key={url}>
            <Link
              href={url}
              onClick={onClose}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Image
                src={icon}
                alt={name}
                width={24}
                height={24}
              />
              <p className="text-base font-medium">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileSideBar