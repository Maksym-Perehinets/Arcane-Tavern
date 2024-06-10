// import React from 'react'
import React, { useState } from "react";
import { changeImg, checkPasswordMatch } from "../../components/scripts_tmp/showHidePass";

;

const SignUpForm = () => {

let [password, setPassword] = useState("");
let [showPassword, setShowPassword] = useState(false);
let [password2, setPassword2] = useState("");
// let img = document.querySelector(".eyeImg");
  return (
    <>
    <h1>Sign Up</h1>
      <form action="">
      <label htmlFor="">Email</label>
    <input type="email" name="" id="" placeholder="example@mail.com" />
    <label htmlFor="">Password</label>
    <input onInput={checkPasswordMatch} id="pass1" type={
                        showPassword ? "text" : "password"
                            }
                    value={password} onChange={(e) =>
                        setPassword(e.target.value)
                     } />    
    <label className="eyeImg">          
    <input onClick={changeImg} id="check" type="checkbox" 
    onChange={() =>
        setShowPassword((prev) => !prev)

    } />
    </label>

    <label htmlFor="">Password again</label>
    <input  value={password2} onChange={(e) =>
                        setPassword2(e.target.value)
                     } onInput={checkPasswordMatch} id="pass2" type="password" />
    <div className="btn"><input type="submit" value="Sign Up" /> </div>
    <div className="gotoDiv"><span className="gotoLoginBtn">Or if you already have account...</span></div>
    </form>
    </>
    
  )
}

export default SignUpForm