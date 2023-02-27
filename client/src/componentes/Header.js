import React from 'react'
import { Link } from "react-router-dom";
import DarkMode from './DarkMode';
import Logo from './Logo';

const Header = () => {
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
                        <Link 
                            to="/login"
                        >
                            Login
                        </Link>
                    </h3>
                    <DarkMode/>
                </div>
            </header>
        </>
    )
}

export default Header
