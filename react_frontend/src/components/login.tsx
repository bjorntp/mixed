import axios from 'axios';
import React, { useState } from 'react'

const LoginComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const api = axios.create(
    {
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true,
    }
  );

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post('users/login', { userName, password });
      if (response.status === 201) {
        console.log("Login successfull!")
        setUserName('')
        setPassword('')
      } else {
        console.error(response.status)
      }
    } catch (err) {
      console.error("An error occured while login in: ", err);
    }
  }

  return (
    <div className="h-svh w-svh flex flex-row bg-gray-100 align-middle justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md" >
        <label className="w-full flex flex-row justify-around py-2">
          Enter username:
          <input type="text" placeholder="Enter your user name" name="userName" onChange={e => setUserName(e.target.value)} value={userName} />
        </label>
        <label className="w-full flex flex-row justify-around py-2">
          Enter password:
          <input className="border border-1" type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <div className="w-full flex flex-row justify-end">
          <button className="p-2 mt-2 bg-blue-200 rounded-md" type="submit">Login</button>
        </div>
      </form >
    </div >
  )
}

export default LoginComponent;
