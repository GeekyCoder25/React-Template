import React from 'react';
import logo from './logo.svg'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <h1>ReactFacts</h1>
            <ul>React-Course - Project 1</ul>
            {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>FAQs</li>
            </ul> */}
        </nav>
    );
}

export default Navbar;