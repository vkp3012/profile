import React from 'react'
import Meta from './Meta'

const ForgetPassword = () => {
  return (
    <>
    <Meta title = {"Forget Password"} />
    <form class='forgetPassword-form'>
        <h2>VKP</h2>
        <input type="email" placeholder='Email'/>
        <div>
            <button className='button'>Send Mail</button>
        </div>
    </form>
    </>
  )
}

export default ForgetPassword
