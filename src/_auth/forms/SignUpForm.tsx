// import React from 'react'
import React, { useState } from "react";
;

const SignUpForm = () => {

let [password, setPassword] = useState("");
let [showPassword, setShowPassword] = useState(false);
let isChecked = false;
  return (
    <>
    <h1>Sign Up</h1>
      <form action="">
      <label htmlFor="">Email</label>
    <input type="email" name="" id="" placeholder="example@mail.com" />
    <label htmlFor="">Password</label>
    <input type={
                        showPassword ? "text" : "password"
                            }
                    value={password} onChange={(e) =>
                        setPassword(e.target.value)
                     } />    
    <label className="eyeImg">          
    <input id="check" type="checkbox" 
    onChange={() =>
        setShowPassword((prev) => !prev)
        
    } />
    </label>

    <label htmlFor="">Password again</label>
    <input type="password" placeholder="" />
    <div className="btn"><input type="submit" value="Sign Up" /> </div>
    <div className="gotoDiv"><span className="gotoLoginBtn">Or if you already have account...</span></div>
    </form>
    </>
    
  )
}

export default SignUpForm