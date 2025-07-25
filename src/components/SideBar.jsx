import { navItems } from '@/constants';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-white rounded-none gap-6 shadow-none p-4 pl-0 pr-0 h-full hidden md:block">
      <nav>
        <ul className="space-y-4">
          {navItems.map(({ url, name, icon }) => {
            const isActive = pathname === url;

            return (
                <Link key={name} href={url}>
                    <li
                      key={url}
                      className={`flex items-center cursor-pointer gap-6 px-6 py-4      rounded-none transition-all
                        ${isActive ? 'bg-blue-50 border-l-2 border-blue-600' :      'hover:bg-gray-100'}
                      `}
                    >
                      <Image src={icon} alt={name} width={20} height={20} />
                      <p
                        className={`text-sm font-medium ${
                          isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {name}
                      </p>
                    </li>
                </Link>
              
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
