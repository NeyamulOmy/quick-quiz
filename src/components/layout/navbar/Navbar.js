import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav'>
            <h2>Quick Quiz</h2>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'blog'}>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;