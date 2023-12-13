import './Footer.scss';
import facebook from '../../img/icon-facebook.svg';
import twitter from '../../img/icon-twitter.svg';
import logo from '../../img/logo-bookmark.svg';

export const Footer = () => {

    return (
        <div className="footer">
            <img
                className="footer__logo logo"
                src={logo}
                alt="Logo"
            />
            <ul className='footer__list'>
                <li className="footer__link">Features</li>
                <li className="footer__link">Pricing</li>
                <li className="footer__link">Contact</li>
            </ul>
            <div className='footer__social'>
                <img src={facebook} alt="Facebook"></img>
                <img src={twitter} alt="Twitter"></img>
            </div>
        </div>
    )
}