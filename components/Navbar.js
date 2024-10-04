'use client'

import { useState } from 'react'
import Link from 'next/link'
import HoverMenu from './HoverMenu'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null)

  const navItems = [
    { name: 'About', path: '/about', submenu: ['Our Mission', 'Team', 'Partners'] },
    { name: 'Events', path: '/events', submenu: ['Upcoming', 'Past Events', 'Calendar'] },
    { name: 'Projects', path: '/projects', submenu: ['Current', 'Completed', 'Ideas'] },
    { name: 'Join', path: '/join', submenu: ['Membership', 'Apply', 'FAQ'] },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl">
            Software Engineers Developer Club
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
              >
                <Link href={item.path} className="hover:text-blue-600">
                  {item.name}
                </Link>
                {activeMenu === item.name && <HoverMenu items={item.submenu} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar