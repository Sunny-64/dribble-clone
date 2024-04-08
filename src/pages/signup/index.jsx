import React from 'react'

// Library Imports
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom'

// Custom imports
import { designerSvg } from './../../assets'
import { registerSchema } from '../../validations/schemas'

const Signup = () => {

  const navigate = useNavigate(); 

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = (e) => {
      if(!isValid) {
        return; 
      }
      console.log("clicked")
      navigate('/get-started')
  }

  return (
    <div className='lg:grid lg:grid-cols-3 min-h-screen tracking-tight'>
      <div className="hidden lg:col-span-1 bg-light-brown py-12 px-14 lg:flex flex-col justify-between">
        <div>
          <p className='text-medium-brown text-2xl mb-4'>dribble</p>
          <p className='text-dark-brown text-3xl font-bold mb-3'>Discover the world's top Designers & Creatives</p>
        </div>
        <img src={designerSvg} alt="" />
        <p className='text-medium-brown'>Illustration from <a className='underline' href="https://undraw.co/illustrations" target='_blank'>Undraw</a></p>
      </div>

      <div className="lg:col-span-2">
        <div className='p-7 flex justify-end mb-4'>
          <p>Already a member ? <a href="#" className='text-blue-800'>Sign In</a></p>
        </div>
        <div className='w-full flex justify-center  py-8'>
          <form className='w-[80%] sm:w-[70%] md:max-w-[50%]' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-3xl font-bold mb-8'>Sign up to Dribble</p>

            <ul className='text-red-600 list-disc px-4 mb-3'>
                {errors?.name?.message && <li>{errors?.name?.message}</li>}
                {errors?.username?.message && <li>{errors?.username?.message}</li>}
                {errors?.email?.message && <li>{errors?.email?.message}</li>}
                {errors?.password?.message && <li>{errors?.password?.message}</li>}
            </ul>

            <div className='flex flex-col sm:flex-row mb-8 gap-4'>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <div className='flex flex-col sm:w-1/2'>
                    <label htmlFor="" className='font-bold'>Name</label>
                    <input type="text" placeholder='john' className='bg-gray-100 py-2 px-3 rounded-md' onChange={onChange} onBlur={onBlur} value={value} />
                  </div>
                )}
              />

              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <div className='flex flex-col sm:w-1/2'>
                    <label htmlFor="" className='font-bold'>Username</label>
                    <input type="text" placeholder='john' className='bg-gray-100 py-2 px-3 rounded-md' onChange={onChange} onBlur={onBlur} value={value} />
                  </div>
                )}
              />
            </div>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <div className='mb-8 flex flex-col'>
                  <label htmlFor="" className='font-bold'>Email</label>
                  <input type="text" placeholder='example@gmail.com' className='bg-gray-100 py-2 px-3 rounded-md' onChange={onChange} onBlur={onBlur} value={value} />
                </div>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <div className='mb-8 flex flex-col'>
                  <label htmlFor="" className='font-bold'>Password</label>
                  <input type="password" name="password" id="password" placeholder='6+ characters' className='bg-gray-100 py-2 px-3 rounded-md' onChange={onChange} onBlur={onBlur} value={value} />
                </div>
              )}
            />

            <div className='mb-6 flex items-start gap-3'>
              <input type="checkbox" name="" id="" className='w-10 h-7' />
              <p className='text-gray-600 text-normal'>Creating an account means you're okay with our <a href="#" className='text-blue-700'>Terms of Services</a>. <a href="#" className='text-blue-700'>Privacy policy</a>, and our default <a className='text-blue-700' href="#">Notification Settings</a></p>
            </div>

            <button className='mb-6 bg-pink text-white py-2 px-12 rounded-md' type="submit">Create Account</button>
            <p className='text-gray-500 text-xs'>This Site is protected by reCAPTCHA and the google <a href="#" className='text-blue-700'>privacy policy</a> and <a href="#" className='text-blue-700'>Terms of Services</a> apply.</p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signup