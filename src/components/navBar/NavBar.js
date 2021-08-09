import React, { useEffect, useState } from 'react';
import './NavBar.css'

function NavBar() {

    const [show, setShow] = useState(false);

    const handleTransitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleTransitionNavBar);
        return () => window.removeEventListener('scroll', handleTransitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img 
                    className='nav__logo' 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="logo"
                />
                <img 
                    className='nav__avatar' 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="avatar" 
                />
            </div>
        </div>
    )
}

export default NavBar
