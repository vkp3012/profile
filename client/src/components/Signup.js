import React, { useContext, useState } from 'react'
import Meta from './Meta'
import Logo from './Logo'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';

const Signup = () => {
    const history = useNavigate();
    const [ name, SetName ] = useState("")
    const [ userName, SetUserName ] = useState("")
    const [ email, SetEmail ] = useState("")
    const [ password, SetPassword ] = useState("")
    const [ confirmPassword, SetConfirmPassword ] = useState("");
    const { signUp , user } = useContext(AuthContext)

    const handleSignup = async () => {
        try {
            await signUp(name,userName,email,password,confirmPassword);
            history.push("/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <Meta title = {"Sign In"} />
        <form className='signup-form'>
            <Logo/>
            <input type="text" placeholder='Name' required=""  name="Name" onChange={(e)=>SetName(e.target.value)}/>
            <input type="text" placeholder='UserName' required="" name="userName" onChange={(e)=>SetUserName(e.target.value)}/>
            <input type="email" placeholder='Email' required="" name="Email" onChange={(e)=>SetEmail(e.target.value)}/>
            <input type="password" placeholder='Enter-Password' name="Password" autoComplete="on" onChange={(e)=>SetPassword(e.target.value)}/>
            <input type="password" placeholder='ConformPassword' name="ConfirmPassword" autoComplete="on" onChange={(e)=>SetConfirmPassword(e.target.value)}/>
            <div>
                <button className='button' onChange={handleSignup}>Sign In</button>
            </div>
            <div>
                <h4>Already Account &nbsp;&nbsp;<Link to = "/login">Login</Link></h4>
            </div>
        </form>
        </>
    )
}

export default Signup
