import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className='signup'>
        <form className='sign-up-form' action="signup">
            <div style={{margin:30}} className="first-name">
                <label style={{margin: 10}} >First Name</label>
                <input style={{padding: 20, fontSize:30, color: 'black'}} placeholder='First name' type="text" />
            </div>
            <div className="last-name">
                <label htmlFor="last-name">Last Name</label>
                <input placeholder='Last Name' type="text" />
            </div>
            <div className="signup-email">
                <label htmlFor="email">Email</label>
                <input placeholder='email' type="email" name="email" id="signup-email" />
            </div>
            <div className="signup-password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="signup-password" />
            </div>
            <div className="signup-confirm">
                <label htmlFor="confirm-password">Confirm</label>
                <input type="password" name="confirm" id="password-cofirm" />
            </div>
            <div className="signup-button">
                <button>Sign Up</button>
            </div>
            <div className="signup-go-home">
                <button onClick={() => navigate('/')}>Go back Home</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp