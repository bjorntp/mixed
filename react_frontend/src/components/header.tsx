import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex justify-around items-center border-b border-b-gray-400 min-h-[7vh]">
        <Link to="/">LOGO HERE</Link>
        <Link to="/login">
          <button className="bg-blue-300 w-24 h-12">Login</button>
        </Link>
      </header>
      <Outlet />
    </>
  )
}

export default Header;
