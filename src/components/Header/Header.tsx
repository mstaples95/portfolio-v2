import './header.scss';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
    
    return (
        <header className='nav-bar'>
            <div className='nav-bar__image-container'>
                <img className='nav-bar__logo' src={logo} alt='logo'/>
            </div>
            <div className='nav-bar__list-container'>
                <ul className='nav-bar__list'>
                    <li className='nav-bar__list-item'>
                        <Link smooth to="#about">About</Link>
                    </li>
                        
                    <li className='nav-bar__list-item'>
                        <Link smooth to="#about">Skills</Link>
                    </li>
                        
                    <li className='nav-bar__list-item'>
                        <Link smooth to="#projects">Projects</Link>
                    </li>
                            
                    <li className='nav-bar__list-item'>
                        <Link smooth to="#contact">Contact</Link>
                    </li>             
                </ul>
            </div>

        </header>
    )
};

export default Header;