import axios from 'axios';
import React, { useState } from 'react'


const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const apiUrl = "http://localhost:3001/api/"

  const api = axios.create(
    {
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true,
    }
  );

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordCheck = password != passwordRepeat;
    if (passwordCheck) {
      setErrorPassword('The passwords does not match');
    }
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailCheck) {
      setErrorEmail('Invalid email');
    }
    if (!passwordCheck && emailCheck) {
      try {
        const response = await api.post('users/signup', { email, userName, password });
        if (response.status === 201) {
          console.log("Login successfull!")
          setEmail('')
          setUserName('')
          setPassword('')
          setPasswordRepeat('')
        } else {
          console.error(response.status)
        }
      } catch (err) {
        console.error("An error occured while signing up: ", err);
      }
    }
  }

  return (
    <div className="h-svh w-svh flex flex-row bg-gray-100 align-middle justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md" >
        <label className="w-full flex flex-row justify-around py-2">
          Enter email:
          <input className="border border-1" type="text" placeholder="Enter your email" name="userName" onChange={e => setEmail(e.target.value)} value={email} />
        </label>
        <label className="w-full flex flex-row justify-around py-2">
          Enter username:
          <input className="border border-1" type="text" placeholder="Enter your desired user name" name="userName" onChange={e => setUserName(e.target.value)} value={userName} />
        </label>
        <label className="w-full flex flex-row justify-around py-2">
          Enter password:
          <input className="border border-1" name="password" onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <label className="w-full flex flex-row justify-around py-2">
          Repeat password:
          <input className="border border-1" name="passwordRepeat" onChange={e => setPasswordRepeat(e.target.value)} value={passwordRepeat} type="password" />
        </label>
        <div className="w-full flex flex-row justify-end">
          <button className="p-2 mt-2 bg-blue-200 rounded-md" type="submit">Login</button>
        </div>
      </form >
    </div >

  )
}

export default Signup;
