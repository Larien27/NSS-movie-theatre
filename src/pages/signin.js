import React from 'react'
import {useState} from 'react'
import './css/registration.css'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setEmail('');
      setPassword('');
    };
  
    return (
        <>
            <h1>Sign in</h1>
            <form id='form' onSubmit={handleSubmit}>
                <div className='inputs'>
                <label htmlFor='email'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
        
                <div className='inputs'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
        
                <button id='submit' type='submit'>Sign In</button>
            </form>
        </>
    );
  }
  
  export default SignIn;