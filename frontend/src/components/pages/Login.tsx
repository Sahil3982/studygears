"use client"
import React from 'react'
import Image from 'next/image'
const Login = () => {
  return (
    <div>
      <div className='flex justify-start align-middle h-20 w-full shadow-xl  border-2'>
         <Image src="/logo.png" alt="Logo" width={100} height={40}/>
      </div>
      <div className='h-1/6 w-full flex justify-center align-middle'>
      <div className='flex align-middle justify-center h-full w-1/2'>
      </div>
      <div className='flex align-middle justify-center h-full w-1/'></div>
      </div>
     
    </div>
  )
}

export default Login