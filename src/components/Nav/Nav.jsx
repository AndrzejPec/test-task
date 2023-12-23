import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from '../../img/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../img/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../img/icon-close.svg';

import './Nav.scss';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            const nav = document.querySelector('.nav__list');
            const logo = document.querySelector('.nav__logo');
        
            if (isMenuOpen) {
                nav.classList.add('nav__list--closing');
                logo.classList.add('nav__logo--closing');

                nav.addEventListener('animationend', handleAnimationEnd, { once: true });
            }  else {
                setIsMenuOpen(true);
            }
        };
    }

    const handleAnimationEnd = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav">
            <div className='nav__container'>
                <div className={`nav__logo ${isMenuOpen ? 'nav__logo--active' : ''}`}>
                    {isMenuOpen ? <Logo className="logo" onClick={toggleMenu}/> : <Logo className="logo" />}
                </div>
                <div className="nav__hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <CloseIcon onClick={toggleMenu}/> : <Hamburger />}
                </div>
                <ul className={`nav__list ${isMenuOpen ? 'nav__list--active' : ''}`}>
                    <li className="nav__item">
                        <Link
                            to="features"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="nav__link"
                            onClick={toggleMenu}
                        >
                            Features
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="download"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                            className="nav__link"
                            onClick={toggleMenu}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="form"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                            className="nav__link"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav__item">
                        <button className="button nav__button">Login</button>
                        <a className='nav__signup'>No has account yet?!<br />SIGNUP TODAY!!!!!!! aaaaaa</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
