import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
// import AuthProvider,{ useAuth } from '../Context/AuthProvider';
import DarkMode from './DarkMode';
import Logo from './Logo';

const Header = () => {
    // console.log(localStorage.getItem("user"));
    // const { user, logout } = useAuth()
 
    useEffect(() => {
        let navBar = document.querySelector("header");

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
                navBar.setAttribute("class", "activeNavBar")
            }
            else if ((window.pageYOffset === 0)) {
                navBar.classList.remove("activeNavBar")
            }
        });
    }, []);

    return (
        <>
            <header className='header'>
                <Logo/>
                <div>
                    <h3>
                        <Link 
                            to="/"
                        >
                            Home
                        </Link>
                    </h3>
                    <h3>
                        <Link 
                            to="/about"
                        >
                            About
                        </Link>
                    </h3>
                    <h3>
                        <Link 
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </h3>
                </div>
                <div>
                    <h3>
                    {/* { user ?
                        <>
                            {console.log(user)}
                                <li>
                                    <Link to="/profile">{user?.data?.name}</Link>
                                </li>
                                <li>
                                    <Link to="" onClick={logout}>Logout</Link>
                                </li>
                        </>
                        :                        
                        <Link to="/login">Login</Link>
                    } */}
                     <Link to="/login">Login</Link>
                    </h3>
                    <DarkMode/>
                </div>
            </header>
        </>
    )
}

export default Header
