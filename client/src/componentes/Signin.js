import React from 'react'
import Meta from './Meta'
import Logo from './Logo'

const Signin = () => {
    return (
        <>
        <Meta title = {"Sign In"} />
        <form class='signin-form'>
            <Logo/>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='UserName'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='ConformPassword'/>
            <div>
                <button className='button'>Sign In</button>
            </div>
        </form>
        </>
    )
}

export default Signin
