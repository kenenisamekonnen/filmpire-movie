import React from 'react'
import { useNavigate } from 'react-router-dom'
import FullWeb from '../FullWeb';
import './sign.css';
const SignIn = () => {

    const navigate = useNavigate();
  return (
    <div>
        <form action="signin">
            <div className="signin-email">
                <label htmlFor="email">Email</label>
                <input placeholder='type your email' type="email" name="email" id="email" />
            </div>
            <div className="signin-password">
                <label htmlFor="password">Password</label>
                <input placeholder='type your password' type="password" name="password" id="password" />
            </div>
            <div className="signin-button">
                <button>Login</button>
            </div>
            <div className="signin-gohome">
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </form>

    </div>
  )
}

export default SignIn