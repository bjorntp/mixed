import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginSignOut, setLogSign] = useState(<></>);


  const api = axios.create(
    {
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true,
    }
  );
  async function checkLoggedIn() {

  }

  useEffect(() => {
    if (loggedIn) {
      setLogSign(
        <button className="bg-blue-300 px-12 py-3 rounded-md">
          Sign out
        </button>
      );
    } else {
      setLogSign(
        <button className="bg-blue-300 px-12 py-3 my-3 rounded-md">
          Login
        </button>
      );
    }
  }, [loggedIn]);


  return (
    <>
      <header className="flex justify-around items-center border-b border-b-gray-400 min-h-[7vh]">
        <Link to="/">LOGO HERE</Link>
        <Link to="/login">
          {loginSignOut}
        </Link>
      </header>
      <Outlet />
    </>
  )
}

export default Header;
