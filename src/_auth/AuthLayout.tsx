// import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
  let isAuth = false;
  return (
    <>
    {
      isAuth ? (
        <Navigate to="/" />
    ): (
        
        <div className='signDiv'>
          <Outlet />
        </div>
        
      
    
    )}
    
    </>
    
  )
}

export default AuthLayout