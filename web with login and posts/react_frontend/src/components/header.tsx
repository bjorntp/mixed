import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginSignOut, setLogSign] = useState(<></>);
  const [signUpButton, setSignUpButton] = useState(<></>);
  const [myPosts, setMyPosts] = useState(<></>);
  const [newPost, setNewPost] = useState(<></>);
  const location = useLocation();
  const navigate = useNavigate();


  const api = axios.create(
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      withCredentials: true,
    }
  );
  async function checkLoggedIn() {
    try {
      const response = await api.get('/users/auth');
      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      setLoggedIn(false);
    }

  }

  const logout = async () => {
    try {
      await api.post('users/logout', {}, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Error loggin out');
    }
  }

  useEffect(() => {
    if (loggedIn) {
      setLogSign(
        <button className="bg-blue-300 px-12 py-3 my-3 rounded-md" onClick={logout}>
          Sign out
        </button>
      );
      setSignUpButton(
        <></>
      );
      setNewPost(
        <Link to="/new_post">New post</Link>
      );
      setMyPosts(
        <Link to="/my_posts">My posts</Link>
      );
    } else {
      setLogSign(
        <Link to="/login">
          <button className="bg-blue-300 px-12 py-3 my-3 rounded-md">
            Login
          </button>
        </Link>
      );
      setSignUpButton(
        <Link to="/signup">Signup</Link>
      );
      setNewPost(
        <></>
      );
      setMyPosts(
        <></>
      );
    }
  }, [loggedIn]);

  useEffect(() => {
    checkLoggedIn();
  }, [location])


  return (
    <>
      <header className="flex justify-around items-center border-b border-b-gray-400 min-h-[7vh]">
        <Link to="/">Home</Link>
        {newPost}
        {myPosts}
        {signUpButton}
        {loginSignOut}
      </header>
      <Outlet />
    </>
  )
}

export default Header;
