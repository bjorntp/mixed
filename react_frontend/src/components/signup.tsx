import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != passwordRepeat) {
      setErrorPassword('The passwords does not match');
    }
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailCheck) {
      setErrorEmail('Invalid email');
    }
    // Signup logic
  }

  return (
    <div className="h-svh flex flex-col align-middle justify-center">
      <form className="flex flex-col align-middle justify-around" onSubmit={handleSubmit}>
        <label className="flex justify-evenly m-12">
          Enter your email:
          <input className="border border-1" name="email" onChange={e => setEmail(e.target.value)} value={email} type="text" />
          {errorEmail && <p>{errorEmail}</p>}
        </label>
        <label className="flex justify-evenly m-12">
          Enter desired username:
          <input className="border border-1" name="userName" onChange={e => setUserName(e.target.value)} value={userName} type="text" />
        </label>
        <label className="flex justify-evenly m-12">
          Enter password:
          <input className="border border-1" name="password" onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <label className="flex justify-evenly m-12">
          Repeat password:
          <input className="border border-1" name="passwordRepeat" onChange={e => setPasswordRepeat(e.target.value)} value={passwordRepeat} type="password" />
          <p>{errorPassword}</p>
        </label>
        <button type="submit">Sign up!</button>
      </form>
    </div>
  )
}

export default Signup;
