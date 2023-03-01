import React from 'react'
import Meta from './Meta'
import Logo from './Logo'
const ForgetPassword = () => {
  return (
    <>
    <Meta title = {"Forget Password"} />
    <form class='forgetPassword-form'>
      <div>
        <Logo/>
      </div>
        <input type="email" placeholder='Email'/>
        <div>
            <button className='button'>Send Mail</button>
        </div>
    </form>
    </>
  )
}

export default ForgetPassword
