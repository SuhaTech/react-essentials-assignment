import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react'

const ForgotPassword = () => {
    const [ email, setEmail ] = useState('')
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email){
            console.log('Requesting reset link for:', email)
            setIsSubmitted(true)
        }
    }
  return (
    <div className='min-h-[calc(100vh-4rem)] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-md shadow-blue-600/20">
                    AI
                </div>
            </div>
            <h2 className='mt-4 text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                Reset Your Password
            </h2>
            <p className='mt-2 text-center texr-sm text-gray-600'>
                {!isSubmitted 
                 ? "Enter your email address and we'll send you a link to reset your password."
                 : "Check your inbox for further instructions."}
            </p>
        </div>
      
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
            <div className="bg-white py-8 px-6 shadow-sm border border-gray-100 rounded-xl sm:px-10">
                {!isSubmitted ? (
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={18}/>
                                </div>
                                <input type="email" id='email' name='email' autoComplete='email'
                                value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email id'
                                className='block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all'
                                required />
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'>
                                Send Reset Link 
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-4 space-y-4">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                            <CheckCircle2 size={28}/>
                        </div>
                        <h3 className='text-lg font-bold text-gray-900'>
                            Reset link sent!
                        </h3>
                        <p className='text-sm text-gray-600'>
                            We send Reset password link to {' '}
                            <span className='font-semibold text-gray-900'>{email}</span>
                        </p>
                        <button type='button' onClick={() => setIsSubmitted(false)}
                            className='text-xs font-semibold text-blue-600 underline'>
                            Didn't receive the email? Try again!
                        </button>
                    </div>
                )}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link to='/login' className='inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors'>
                        <ArrowLeft size={16}/>Back to Sign in
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
