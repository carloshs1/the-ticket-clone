import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
 return (
  <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-3 w-full border-b border-gray-700">
   <Link to={'/'} className="text-3xl hover:text-white">
    The ticket clone
   </Link>
   <div className="flex space-x-8">
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
