import React from 'react';
import banner from '../../banner.jpg'
import './Header.css'

const Header = () => {
    return (
        <div >
            <div>
                <img src={banner} alt="" />
            </div>
            <div>
                <h3>Test your knowledge on various topics with quick quiz. Our platform provides you with questions on many topics with solution!</h3>
            </div>
        </div>
    );
};

export default Header;