'use client';

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa6";

const NavBar = () => {

    const currentPath = usePathname();
    const links = [
        {name: 'Dashboard', href: '/'},
        { name: 'Issues', href: '/issues' }
    ]
  return (
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
          <Link href="/" ><FaBug /></Link>
          <ul className='flex space-x-6'>
              {links.map(link => <Link key={link.href} className={`${link.href === currentPath ?  'text-zinc-500' :  'text-zinc-700'} hover:text-zinc-600 transition-colors`} href={link.href}>{link.name}</Link>)}
            
          </ul>
    </nav>
  )
}

export default NavBar