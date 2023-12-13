import './Footer.scss';

export const Footer = () => {

    return (
        <div className="footer">
            <p>© 2020 Bookmark. All rights reserved.</p>
            <img src="../../img/logo-bookmark.svg" alt="Logo"></img>
            <ul className='footer__list'>
                <li className="footer__link">Features</li>
                <li className="footer__link">Pricing</li>
                <li className="footer__link">Contact</li>
            </ul>
        </div>
    )
}