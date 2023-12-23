import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';

import { Contact } from '../Contact/Contact';

import './Footer.scss';

import { ReactComponent as Logo } from '../../img/logo-bookmark.svg';
import { ReactComponent as FB } from '../../img/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../img/icon-twitter.svg';

export const Footer = () => {
    const [isContactOpen, setContactOpen] = useState(false);

    const handleOpenContact = () => {
        setContactOpen(true);
      };
    
      const handleCloseContact = () => {
        setContactOpen(false);
      };

    return (
        <footer className="footer">
            <div className='footer__nav'>
                <div className="footer__logo">
                    <Logo className="logo" />
                </div>
                <ul className='footer__list'>
                    <li className="footer__link">
                        <Link
                            to="features"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                        >
                            Features
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="download"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link onClick={handleOpenContact}>
                            Contact
                        </Link>
                        {isContactOpen && (
                            <Contact onClose={handleCloseContact} />
                        )}
                    </li>
                </ul>
            </div>
            <div className='footer__social'>
                <FB />
                <Twitter />
            </div>
        </footer>
    )
}