import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './MovieFooter.css';

const Footer = ({ title, year }) => {
    return (
        <footer className="movie-footer">
            <div className="movie-footer-container">
                <p className="movie-footer-text">© {year} {title}. All rights reserved.</p>
                <div className="movie-footer-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="movie-footer-icon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="movie-footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="movie-footer-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
