/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Profile = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")).data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        nameSet(user.name)
        passwordSet(user.password)
        emailSet(user.email)
        passwordCnfSet(user.password)
        console.log("abcd",user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const [password, passwordSet] = useState()
    const [passwordCnf, passwordCnfSet] = useState("")
    const [email, emailSet] = useState("");
    const [name, nameSet] = useState("");

    const handleClick = async () => {
        try {
            console.log(user._id);
            const data = await axios.patch("/user/" + user._id, {
                email,
                name,
                password,
                confirmPassword: passwordCnf,
                role: user.role,
                _id:user._id
            });
            console.log(data.data.data);
            localStorage.setItem("user", JSON.stringify(data.data.data));
        } catch (error) {
            console.log(error);
        }
    }
    console.log(user);
    return (
        <div className='container-grey'>
            <div className='form-container'>
                <div className='h1box'>
                    <h1 className='h1'>Profile</h1>
                    <div className='line'></div>
                    <div className='profileImage'></div>
                </div>
                <div className='loginBox'>
                    <div className='entryBox'>
                        <input type="file"/>
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" value={email} onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="text" value={password} onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm Password</div>
                        <input className="password input" type="text" value={passwordCnf} onChange={(e) => passwordCnfSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="password input" type="text" value={name} onChange={(e) => nameSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleClick}>
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
