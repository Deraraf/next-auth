"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-screen py-4'>
            <label htmlFor="username">Username:</label>
            <label htmlFor="username">Username:</label>
  <input
    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-gray-500'
    type="text"
    id="username"
    name="username"
    value={user.username}
    onChange={e =>setUser({...user,username: e.target.value})}
    required
    placeholder='Enter your username'
    autoComplete='username'
  />
            <label htmlFor="password">Password:</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-gray-500'
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={e =>setUser({...user,username: e.target.value})}
                required
                placeholder='Enter your password'
                autoComplete='password'
            />
            <button type="submit" className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none bg-[crimson] hover:bg-[#5e164f]'>Log In</button>
            <p>
                Don't have an account? <Link href="/signup" className='text-[#b8379a]'>Sign up</Link>
            </p>
        </form>
    );
}

export default Login;
