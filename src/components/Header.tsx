import { Bars3BottomRightIcon, TicketIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
 const [mobileMenu, setMobileMenu] = useState(false)
 const navigate = useNavigate()
 const handleClick = (route: string) => {
  setMobileMenu(false)
  navigate(route)
 }
 return (
  <header className="sticky top-0 z-50 flex justify-between items-center px-5 py-6 w-full bg-[rgba(28,28,30,.9)]">
   <div
    className={`absolute top-16 h-screen w-screen bg-black opacity-40 py-10 ${
     mobileMenu ? 'left-0' : 'left-[150%]'
    } md:hidden`}
   />
   <div
    className={`absolute top-16 bg-black w-[80%] flex flex-col ${
     mobileMenu ? 'left-[10%]' : 'left-[150%]'
    } md:hidden`}
   >
    <p
     onClick={() => handleClick('/add-event')}
     className="text-xl py-2 text-white"
    >
     Create event
    </p>
    <hr className=" border-dashed" />
    <p
     onClick={() => handleClick('/login')}
     className="text-xl py-2 text-white"
    >
     Log in
    </p>
   </div>
   <Link to={'/'} className="text-xl hover:text-white">
    <div className="flex space-x-1 items-center">
     <TicketIcon className="h-6 w-6 text-white" />
     <p className="text-white text-sm md:text-base font-thin">
      THE<span className="font-extrabold">TICKET</span>CLONE
     </p>
    </div>
   </Link>
   <Bars3BottomRightIcon
    className="h-6 w-6 text-white md:hidden"
    onClick={() => setMobileMenu(!mobileMenu)}
   />
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
