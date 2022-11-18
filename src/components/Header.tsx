import { Bars3BottomRightIcon, TicketIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
 return (
  <header className="sticky top-0 z-50 flex justify-between items-center px-5 py-5 w-full bg-[rgba(28,28,30,.9)]">
   <Link to={'/'} className="text-xl hover:text-white">
    <div className="flex space-x-1">
     <TicketIcon className="h-6 w-6 text-white" />
     <p className="text-white font-thin">
      THE<span className="font-extrabold">TICKET</span>CLONE
     </p>
    </div>
   </Link>
   <Bars3BottomRightIcon className="h-6 w-6 text-white" />
   <div className="hidden md:flex space-x-8">
    <Link to={'/add-event'} className="text-sm">
     Create event
    </Link>
    <Link to={'/login'} className="text-sm">
     Log in
    </Link>
   </div>
  </header>
 )
}

export default Header
