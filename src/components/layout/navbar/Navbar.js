import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav'>
            <h2>Quick Quiz</h2>
            <div>
                <a href="#">Home</a>
                <a href="#">Blog</a>
            </div>
        </nav>
    );
};

export default Navbar;