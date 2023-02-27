import React from 'react'
import Meta from './Meta'
import { Link } from "react-router-dom"
import Logo from './Logo'
const Login = () => {


    return (
        <>
            <Meta title = {"Login"} />
            <form class='login-form'>
                <Logo/>
                <input type="text" placeholder='UserName or Email'/>
                <input type="password" placeholder='Password'/>
                <div>
                    <button className='button'>Login</button>
                    <button className='button'>
                        <Link to = "/signin" >Sign In</Link>
                    </button>
                </div>
                <div>
                    <Link to = "/forgetPassword">Forget Password</Link>
                </div>
            </form>
        </>
    )
}

export default Login
