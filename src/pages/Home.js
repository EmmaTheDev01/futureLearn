import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className='login'>
                <div className='left'> </div>
                <div className='middle'>
                    <div className='logo'>
                        <h1>Login</h1>
                    </div>
                    <form id='login'>
                        <input className='email' name='email' placeholder='Enter your email address'></input>
                        <input className='password' name='password' placeholder='Enter your password' />
                        <button className='login_btn'>Login</button>
                    </form>
                    <label>Don't have an account? <Link className='link' to="/new-account"> Register</Link> here</label>
                </div>
                <div className='right'></div>
            </div>
        </div>
    )
}

export default Home