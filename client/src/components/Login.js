import React, { useContext, useState } from 'react'
import Meta from './Meta'
import { Link } from "react-router-dom"
import Logo from './Logo'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {

    const history = useNavigate();
    const [ email, SetEmail ] = useState("")
    const [ password, SetPassword ] = useState("")
    const {login, user} = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            console.log(email,password)
            await login(email, password)
            history.push("/")
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <>
            <Meta title = {"Login"} />
            <form className='login-form'>
                <Logo/>
                <input type="text" placeholder='UserName or Email' onChange={(e)=>SetEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=>SetPassword(e.target.value)}/>
                <div>
                    <button className='button' onChange={handleLogin}>Login</button>
                    <button className='button'>
                        <Link to = "/signup" >Sign In</Link>
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
