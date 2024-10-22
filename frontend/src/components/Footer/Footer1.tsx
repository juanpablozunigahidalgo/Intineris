import React from 'react';
import './Footer1.css';

const Footer1: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section address">
                <h3>Address</h3>
                <p>Sankt Eriksgatan 6<br />Göteborg<br />Sweden</p>
            </div>
            <div className="footer-section services">
                <h3> </h3>
                <ul>
                    <li><a href="#personal-training"> </a></li>
                    <li><a href="#ageless-fitness"> </a></li>
                    <li><a href="#online-training"> </a></li>
                </ul>
            </div>
            <div className="footer-section company">
                <h3>Information</h3>
                <ul>
                    <li><a href="#about">Vision</a></li>
                    <li><a href="#blog">Join US</a></li>
                    <li><a href="#terms">FAQ</a></li>
                    <li><a href="#privacy">Investor Information</a></li>
                </ul>
            </div>
            <div className="footer-section support">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#contact">info@intineris.com</a></li>
                    <li><a href="#login"> +46 729971641 </a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer1;