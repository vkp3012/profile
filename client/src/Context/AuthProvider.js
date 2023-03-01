import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext();
}

function AuthProvider({ children }){
    const history = useNavigate();
    const [ user , SetUser ] = useState("");
    const [ loading ] = useState(false);

    async function signUp(name,userName,email,password,confirmPassword){
        const data = await axios.post("user/signup",{
            name : name,
            userName : userName,
            email : email,
            password : password,
            confirmPassword : confirmPassword
        });
        console.log(data,user);
        SetUser(user);
    }

    async function login(email,password){
        try {
            const data = await axios.post("user/login",{
                email : email,
                password : password
            });
            console.log("data",data.data);
            SetUser(data.data);
            localStorage.setItem("user",JSON.stringify(data.data));
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async function logout(){
        localStorage.removeItem("user");
        const data = await axios.get("user/logout");
        console.log(data);
        SetUser(null);
    }

    useEffect(() => {
        let data = localStorage.getItem("user")
        console.log(data , 898787);
        if(data){
            SetUser(JSON.parse(data));
            console.log(user);
            history.push("/");
        }else{
            SetUser(null);
        }
    },[history, user]);


    const value = {
        user,
        login,
        signUp,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;