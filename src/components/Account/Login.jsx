import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='flex items-center justify-center w-full  h-screen'>
      <div className='flex flex-col gap-[30px] items-center justify-center w-full max-w-[520px] px-4 py-8 rounded-lg bg-stone-100 text-stone-800'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form className='flex flex-col gap-[24px] w-full items-center justify-between'>
       
          <div className='flex w-full flex-col'>
            <label htmlFor=''>
              {' '}
              Enter Email Address <span className='text-red-700'>*</span>
            </label>
            <input
              type='email'
              placeholder='Enter email address'
              name='em'
              className='py-2 h-11 rounded-lg px-4 bg-transparent border-[1px] border-stone-500  text-stone-800 outline-none'
            />
          </div>
          <div className='flex w-full flex-col relative'>
            <label htmlFor=''>
              Enter Password <span className='text-red-700'>*</span>
            </label>
            <input
              name='pwd'
              placeholder='Password'
              type={`${showPassword ? 'text' : 'password'}`}
              className='py-2 pr-[30px] h-11 rounded-lg px-4 bg-transparent border-[1px]  text-stone-800 border-stone-500 outline-none'
            />

            {showPassword ? (
              <FaEye
                className='text-stone-800 cursor-pointer absolute right-4 top-10 '
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className='text-stone-800 cursor-pointer absolute right-4 top-10 '
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button
            type='submit'
            className='w-full py-[18px] px-[24px] bg-stone-800 text-stone-300 rounded-[10px]'
          >
            Log In
          </button>

          <p className='gap-2'>
            Don't have an Account{' '}
            <Link to='/signup' className='text-[#CF0807] font-extrabold'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
