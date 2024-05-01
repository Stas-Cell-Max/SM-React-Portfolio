import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (

        
        <footer className="footer mt-0">
            <div className="container">
                
                <span>  Made with <span role="img" aria-label="heart">❤️</span> by Stas </span>
                <div>
                <span> {(new Date().getFullYear())} &copy; <span> All rights reserved. </span>  </span>   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
