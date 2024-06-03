import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/login');
    }
    const handleClick=(e)=>{
        console.log("que lleve a propietarios. ")
    }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  )
}
