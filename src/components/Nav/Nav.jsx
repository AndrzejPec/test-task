import logo from '../../img/logo-bookmark.svg';
import hamburger from '../../img/icon-hamburger.svg';
import './Nav.scss';

export const Nav = () => {

    return (
        <nav className="nav">
            <ul className="nav__list">
                <img className="nav__logo" src={logo} alt="Logo" />
                <img className="nav__hamburger" src={hamburger} alt="Menu" />
            </ul>
        </nav>
    )
}