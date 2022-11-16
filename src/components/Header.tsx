import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
 return (
  <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-3 w-full border-b border-gray-700">
   <Link to={'/'}>
    <p className="text-3xl">The ticket clone</p>
   </Link>
   <div className="flex space-x-8">
    <Link to={'/add-event'}>
     <p className="text-sm">Create event</p>
    </Link>
    <p className="text-sm">Sign in</p>
   </div>
  </header>
 )
}

export default Header
