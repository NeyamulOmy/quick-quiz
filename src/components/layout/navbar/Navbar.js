import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='full-width'>
            <nav className='nav'>
                <h2>Quick Quiz</h2>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'blog'}>Blog</Link>
                    <Link to={'statistics'}>Statistics</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;