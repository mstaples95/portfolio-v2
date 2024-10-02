import React from "react";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import GithubLogo from "../../assets/icons/icons8-github.svg"
import LinkedInLogo from "../../assets/icons/icons8-linkedin.svg"
import InstagramLogo from "../../assets/icons/icons8-instagram.svg"
import TwitterLogo from "../../assets/icons/icons8-twitter.svg"
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='footer__image-container'>
                <img className='footer__logo' src={logo} alt='logo'/>
            </div>
            <div className="footer__social-link-container">
                <ul className="footer__social-link-list">
                    <li className="footer__social-list-item">
                        <Link to ="https://github.com/mstaples95"> <img className="footer__social-img" src={GithubLogo} alt="Github Link"/> </Link>
                    </li>
                    <li className="footer__social-list-item">
                        <Link to ="https://www.linkedin.com/in/matthew-a-staples/"> <img className="footer__social-img" src={LinkedInLogo} alt="LinkedIn Link"/> </Link>
                    </li>
                    <li className="footer__social-list-item">
                        <Link to ="https://www.instagram.com/matthew_staples95/"> <img className="footer__social-img" src={InstagramLogo} alt="Instagram Link"/> </Link>
                    </li>
                    <li className="footer__social-list-item">
                        <Link to ="https://twitter.com/skooma_1"> <img className="footer__social-img" src={TwitterLogo} alt="Twitter Link"/> </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;