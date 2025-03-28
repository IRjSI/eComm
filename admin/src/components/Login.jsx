import React, { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/admin`, {
                email,
                password
            })
            if (response.data.status) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

  return (
    <div className='flex min-h-screen justify-center items-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium mb-2 text-gray-700'>Email Address</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Email' required />
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium mb-2 text-gray-700'>Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Password' required />
                </div>
                <button className='mt-2 py-2 px-4 rounded-md text-white bg-black w-full' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
