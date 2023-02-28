import React, { useState } from 'react'
import background from "../img/background.png"
import logo from "../img/logo.png"
import validator from 'validator'
import {
  BrowserRouter as Router, Switch,
  Route, Redirect, redirect, useNavigate, Link, Routes, NavLink,Navigate
} from "react-router-dom";
import KullaniciIslemleri from './KullaniciIslemleri'

export default function Login() {

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [emailError, setEmailError] = useState('')
  const navigate = useNavigate();
  let emailValid = 0;
  let emailValid3 = 0;

  const handleClick = () => {
    if(emailValid3 == 1 ){
      navigate("/kullaniciislemleri");
    } else{
      console.log("hataliislemler")
    }
  }
  let yonlendir = () => {
    return emailValid3==1 ? <Route
      exact
      path="kullaniciislemleri"
      element={
        emailValid3==1 ? (
          <KullaniciIslemleri />
        ) : console.log("hataaaaaa")
      }
    /> : console.log('hataliislem');
  }

  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {

      emailValid = 1;
      emailValid3 = 1;
      console.log(emailValid)
      console.log(emailValid3)
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  return (
    <>
      <div className="h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} >
        <div className=' container m-auto w-[558px] h-screen grid place-items-center'>
          <div className='grid place-items-center'>
            <div className='bg-white center w-[301px] h-[103px] rounded-t-[60px] flex '>
              <img src={logo} className='m-auto ' />
            </div>
            <div className='w-[558px] m-auto h-[665px] bg-gradient-to-b from-white to-transparent backdrop-blur rounded-[20px] '>

              <h1 className='absolute text-[32px] top-[46px] text-[#516BC7] left-[220px]'>SIGN IN</h1>
              <form className='absolute top-[238px] left-[71px]'>
                <label>
                  <p className='text-[16px] text-[#4C5F82]'>E mail Address</p>
                  <input type="text" className='w-[416px] placeholder-gray-500 placeholder-opacity-75 border rounded-[6px] p-[16px] mt-[8px]' placeholder="emre@mayzor.net" onChange={e => validateEmail(e)} />
                  <div style={{
                    margin: 'auto',
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}>{emailError}</span>
                  </div>
                </label>

                <div className=' mt-[26px]'>
                  <input type="checkbox" />
                  <p className='text-[16px] w-[395px] inline ml-[8px]'>Remember me</p>
                </div>

                <div className='mt-[24px] h-[52px] rounded-[6px] bg-[#516BC7] flex justify-center items-center'>


                  <button className='text-[16px] text-white' type="submit" onClick={ handleClick  }>Log In</button>
                </div>

                <div className=' mt-[32px] h-[100px]'>
                  <a href="" className='block text-center text-center text-[16px] text-[#4C5F82]'>Forgot your password?</a>
                  <a href="" className='block text-center mt-[24px] text-center text-[16px] text-[#4C5F82]'>Don’t have an account? Sign Up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
