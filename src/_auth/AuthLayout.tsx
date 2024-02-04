// import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

const AuthLayout = () => {
  let isAuth = false;
  return (
    <>
    {
      isAuth ? (
        <Navigate to="/" />
    ): (
        
        <div className='signDiv'>
          <SignUpForm />
        </div>
        
      
    
    )}
    
    </>
    
  )
}

export default AuthLayout