import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../img/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../img/icon-hamburger.svg';
import './Nav.scss';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                <div className="nav__logo">
                    <Logo className="logo" />
                </div>
                <div className="nav__hamburger">
                    <Hamburger />
                </div>
            </ul>
        </nav>
    )
}