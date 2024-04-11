import React from 'react'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const VerifyEmail = () => {
  return (
    <div className='text-gray-500 flex items-center justify-center flex-col my-20 p-5'>
        <p className='font-medium text-black text-3xl'>Please verify your email...</p>
        <FaEnvelopeCircleCheck size={100}/>
        <p className='mb-3'>Please verify your email address. We've sent a confirmation email to :</p>
        <p className='font-bold text-black mb-3'>account@refero.design</p>
        <p className='mb-2'>Click the confirmation link in that email to begin using Dribble.</p>
        <p className='mb-2 text-center'>Didn't receive the email? Check your Spam folder. It may have been caught by a filter. If you still don't see it. you can <a href="" className='text-pink'>resend the confirmation email.</a></p>
        <p>Wrong email address ? <a className='text-pink' href="#">Change it</a></p>
    </div>
  )
}

export default VerifyEmail