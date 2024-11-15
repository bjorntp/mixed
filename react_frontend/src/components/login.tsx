import React, { useState } from 'react'

const LoginComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Login logic
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter username:
          <input className="border border-1" name="userName" onChange={e => setUserName(e.target.value)} value={userName} type="text" />
        </label>
        <label>
          Enter password:
          <input className="border border-1" name="password" onChange={e => setPassword(e.target.value)} value={password} type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginComponent;
