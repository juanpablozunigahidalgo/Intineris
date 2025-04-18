import React from 'react';
import './Footer1.css';

const Footer1: React.FC = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
          const offset = window.innerHeight / 2;  // Middle of the screen
          window.scrollTo({
            top: sectionPosition - offset,
            behavior: 'smooth',
          });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-section address">
                <h3>Address</h3>
                <p><br />Göteborg<br />Sweden</p>
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
                    <li><a href="#vision" onClick={() => scrollToSection('vision')}>Logic</a></li>      {/* Links to Vision */}
                    <li><a href="/joinus">Join</a></li>    {/* Links to Features */}
                    <li><a href="/faq">FAQ</a></li>             {/* Link to FAQ page */}
                    <li><a href="/investors">Investors</a></li> {/* Link to Investor Info page */}
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