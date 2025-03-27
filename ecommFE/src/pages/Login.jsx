import React, { useState } from 'react'

function Login() {
  const [currentState,setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      <input type="text" className={`w-full px-3 py-2 border border-gray-800 ${currentState === 'login' ? 'hidden' : ''}`} placeholder='Name' required />
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot password?</p>
        {
          currentState === 'login' ? <p onClick={() => setCurrentState('Sign Up')}>Create Account</p> : <p onClick={() => setCurrentState('login')}>Login Here</p>
        }
      </div>
      <button className='bg-black text-white py-2 px-8 mt-4 font-light'>{currentState}</button>
    </form>
  )
}

export default Login
