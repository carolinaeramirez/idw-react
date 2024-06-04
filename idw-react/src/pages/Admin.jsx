import React from 'react';
import { useNavigate } from 'react-router-dom';


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
      <h3>Login - Ingreso Usuarios</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:    </label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button onClick={handleClick} className='btn'>Login</button>
      </form>
    </div>
  )
}
