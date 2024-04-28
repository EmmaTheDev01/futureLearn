import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
const Register = () => {
    return (
        <div>
            <div className='register'>
                <div className='left'> </div>
                <div className='middle'>
                    <div className='logo'>
                        <h1>Sign Up</h1>
                    </div>
                    <form>
                        <input className='text' name='firstname' placeholder='Enter your Firstname address'></input>
                        <input className='text' name='lastname' placeholder='Enter your lastname address'></input>
                        <input className='text' name='reg_no' placeholder='Enter your Reg Number address'></input>
                        <input className='email' name='email' placeholder='Enter your email address'></input>
                        <input className='password' name='password' placeholder='Enter your passord' />
                        <input className='password' name='confirm_password' placeholder='Confirm your password' />
                        <button className='register_btn'>Register</button>
                    </form>
                    <label>Already have an account? <Link className='link' to="/"> Login</Link> here</label>
                </div>
                <div className='right'></div>
            </div>
        </div>
    )
}

export default Register