// import React from 'react'

const SignUpForm = () => {
  return (
    <>
    <h1>Sign Up</h1>
      <form action="">
      <label htmlFor="">Email</label>
    <input type="email" name="" id="" placeholder="example@mail.com" />
    <label htmlFor="">Password</label>
    <input type="password"placeholder="" />
    <label htmlFor="">Password again</label>
    <input type="password" placeholder="" />
    <div className="btn"><input type="submit" value="Sign Up" /> </div>
    <div className="gotoDiv"><span className="gotoLoginBtn">Or if you already have account...</span></div>
    </form>
    </>
    
  )
}

export default SignUpForm