import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(<></>);
  const navigate = useNavigate();

  const api = axios.create(
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      withCredentials: true,
    }
  );

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post('users/login', { login, password });
      if (response.status === 201) {
        console.log("Login successfull!")
        navigate('/');
      } else {
        console.error(response.status)
      }
    } catch (err) {
      setErrorMessage(<p className="text-red-600 col-start-2 col-span-4">Something went wrong, please try again.</p>)
      console.error("An error occured while loging in: ", err);
    }
  }

  return (
    <div className="h-svh w-svh flex flex-row bg-gray-100 align-middle justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md" >
        <label className="w-full grid grid-cols-7 justify-around py-2">
          <p className="col-start-2" >Enter username:</p>
          <input className="col-start-5 col-span-2 padding-1 border border-1 rounded-md px-1" type="text" placeholder="Enter your user name" name="userName" onChange={e => setLogin(e.target.value)} value={login} />
        </label>
        <label className="w-full grid grid-cols-7 justify-around py-2">
          <p className="col-start-2">Enter password:</p>
          <input className="col-start-5 col-span-2 padding-1 border border-1 rounded-md px-1" placeholder="Enter password" type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <div className="w-full grid grid-cols-7  items-center ">
          {errorMessage}<button className="p-2 mt-2 bg-blue-200 rounded-md col-start-6" type="submit">Login</button>
        </div>
      </form >
    </div >
  )
}

export default LoginComponent;
