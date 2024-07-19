import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
                email,
                password
            });
            
            // Handle successful login (e.g., redirect)
            console.log('Login successful:', response.data);
            navigate('/home');
            
        } catch (error) {
            // Handle error (e.g., display error message)
            console.error('Login error:', error.response.data.error);
        }
    };

    return (
        <div>
            <div className='login'>
                <div className='left'> </div>
                <div className='middle'>
                    <div className='logo'>
                        <h1>Login</h1>
                    </div>
                    <form id='login' onSubmit={handleSubmit}>
                        <input
                            className='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className='password'
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className='login_btn' type='submit'>Login</button>
                    </form>
                    <label>
                        Don't have an account? <Link className='link' to="/new-account"> Register</Link> here
                    </label>
                </div>
                <div className='right'></div>
            </div>
        </div>
    );
};

export default Home;
