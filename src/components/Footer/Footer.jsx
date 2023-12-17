import './Footer.scss';

import { ReactComponent as Logo } from '../../img/logo-bookmark.svg';
import { ReactComponent as FB } from '../../img/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../img/icon-twitter.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__nav'>
                <div className="footer__logo">
                    <Logo className="logo" />
                </div>
                <ul className='footer__list'>
                    <li className="footer__link">Features</li>
                    <li className="footer__link">Pricing</li>
                    <li className="footer__link">Contact</li>
                </ul>
            </div>
            <div className='footer__social'>
                <FB />
                <Twitter />
            </div>
        </footer>
    )
}