import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorPassword, setErrorPassword] = useState(<></>);
  const [errorEmail, setErrorEmail] = useState(<></>);
  const navigate = useNavigate();

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
      setErrorPassword(<p>The passwords does not match</p>);
    } else {
      setErrorPassword(<></>);
    }
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailCheck) {
      setErrorEmail(<p>Invalid email</p>);
    } else {
      setErrorEmail(<></>);
    }
    if (!passwordCheck && emailCheck) {
      try {
        const response = await api.post('users/signup', { email, userName, password });
        if (response.status === 201) {
          console.log("Signup successfull!")
          navigate('/')
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
        <label className="grid grid-cols-7 w-full justify-around py-2">
          <p className="col-start-2">Enter email:</p>{errorEmail}
          <input className="border border-1 col-start-5 col-span-2" type="text" placeholder="Enter your email" name="userName" onChange={e => setEmail(e.target.value)} value={email} />
        </label>
        <label className="grid grid-cols-7 w-full justify-around py-2">
          <p className="col-start-2">Enter username:</p>
          <input className="border border-1 col-start-5 col-span-2" type="text" placeholder="Enter your desired user name" name="userName" onChange={e => setUserName(e.target.value)} value={userName} />
        </label>
        <label className="grid grid-cols-7 w-full justify-around py-2">
          <p className="col-start-2">Enter password:</p>
          <input className="border border-1 col-start-5 col-span-2" name="password" onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <label className="grid grid-cols-7 w-full justify-around py-2">
          <p className="col-start-2 col-span-2">Repeat password:</p>{errorPassword}
          <input className="border border-1 col-start-5 col-span-2" name="passwordRepeat" onChange={e => setPasswordRepeat(e.target.value)} value={passwordRepeat} type="password" />
        </label>
        <div className="w-full flex flex-row justify-end">
          <button className="p-2 mt-2 bg-blue-200 rounded-md" type="submit">Sign up</button>
        </div>
      </form>
    </div>

  )
}

export default Signup;
