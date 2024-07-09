import React from 'react'
import {useState} from 'react'
import './css/registration.css'

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setChecked(false);
    };
  
    return (
        <>
            <h1>Registration Form</h1>
            <form id='form' onSubmit={handleSubmit}>
                <div className='inputs'>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                </div>

                <div className='inputs'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                </div>
        
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

                <div>
                <input 
                    id='terms'
                    type='checkbox'
                    value={isChecked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor='terms'>I agree with the terms</label>
                </div>
        
                <button id='submit' type='submit'>Register</button>
            </form>
        </>
    );
  }
  
  export default Registration;