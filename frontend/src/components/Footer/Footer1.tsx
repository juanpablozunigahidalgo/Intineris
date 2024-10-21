import React from 'react';
import './Footer1.css';

const Footer1: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section services">
                <h3>Services</h3>
                <ul>
                    <li><a href="#personal-training">Personal Training</a></li>
                    <li><a href="#ageless-fitness">The Ageless Fitness Formula</a></li>
                    <li><a href="#online-training">Online Personal Training</a></li>
                </ul>
            </div>
            <div className="footer-section company">
                <h3>Company</h3>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#terms">Terms & Conditions</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section support">
                <h3>Support</h3>
                <ul>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Client Login</a></li>
                    <li><a href="#community">Join Our Facebook Community</a></li>
                </ul>
            </div>
            <div className="footer-section address">
                <h3>Address</h3>
                <p>4233 Florentine Dr.<br />Longmont<br />CO 80503</p>
            </div>
        </footer>
    );
};

export default Footer1;