import React from 'react'
import { Link } from "react-router-dom";
import DarkMode from './DarkMode';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div>VKP</div>
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
                    <h3>Login</h3>
                    <DarkMode/>
                </div>
            </header>
        </>
    )
}

export default Header
