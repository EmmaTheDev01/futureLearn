import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { useContext } from 'react';

const Home = () => {
    const { login } = useContext(AuthContext); // Get login function from AuthContext
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
            
            // Handle successful login
            console.log('Login successful:', response.data.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem("loggedInUserId", response.data.data._id);
            localStorage.setItem('role', response.data.role); // Ensure role is stored
            login(response.data.token, response.data.role); // Call the login method from context
            navigate('/home'); // Navigate to the home page
            
        } catch (error) {
            console.error('Login error:', error.response);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900 items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">Login</h1>
                </div>
                <form id='login' onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
                        name='email'
                        type='email'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
                        name='password'
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
                        type='submit'
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center text-gray-300">
                    <span>Don't have an account? </span>
                    <Link className="text-green-400 hover:text-green-300 font-semibold" to="/new-account">
                        Register
                    </Link>
                    <span> here</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
