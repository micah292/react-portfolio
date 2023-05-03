import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <div>
                            <p>17824 W Oberlin Way</p>
                            <p>Surprise, Az 85387</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    602-503-8087
                        </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    sharifimicah17@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Social Media</h4>
                    <div className="social-media">
                      <a href="https://www.facebook.com/micah.sharifi">  
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                      </a>
                      <a href="https://github.com/micah292">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                      </a>
                      <a href="https://www.linkedin.com/in/micah-sharifi/">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;