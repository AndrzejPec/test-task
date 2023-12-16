import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../img/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../img/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../img/icon-close.svg';
import './Nav.scss';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <div className='nav__container'>
                <div className="nav__logo">
                    <Logo className="logo" />
                </div>
                <div className="nav__hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <CloseIcon onClick={toggleMenu}/> : <Hamburger />}
                </div>
                <ul className={`nav__list ${isMenuOpen ? 'nav__list--active' : ''}`}>
                    <li className="nav__item">Features</li>
                    <li className="nav__item">Pricing</li>
                    <li className="nav__item">Contact</li>
                    <li className="nav__item">
                        <button className="nav__button">Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
