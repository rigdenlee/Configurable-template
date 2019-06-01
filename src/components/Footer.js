import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer"><h2 className="logo">LOGO</h2>
        <div className="f-container"> 
            <div className="contact" >
                <i className="fas fa-phone icon1"></i> <span className="phoneno">768392648</span>
                <i className="fas fa-envelope icon2"></i><span className="email">companyname@email.com</span>
                <i className="fas fa-link icon3"></i><span className="website">Websiteurl</span>
            </div>
            <div className="details">
                <p className="company">company</p>
                <p className="aboutus">About us</p>
                <p className="joinus">Join us</p>
                <p className="partner">Become our content partner</p>
            </div>
            <div className="links">
                <p>Link</p>
                <p>Course</p>
                <p>Blog and news</p>
            </div>
            <div className="others">
                <p>Others</p>
                <p>Terms and Conditions</p>
                <p>Sitemap</p>
            </div>
            <div className="contact-links">
                <p className="contact-with-us">Contact with us</p>
                <i className="fab fa-facebook fa-2x fbk"></i>
                <i className="fab fa-twitter fa-2x twi"></i>
                <i className="fab fa-youtube fa-2x yout"></i>
                <i className="fab fa-linkedin fa-2x link"></i>
            </div>
        </div>
        </div>
    )
}
