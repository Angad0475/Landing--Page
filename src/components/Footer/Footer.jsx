import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';


 function Footer() {
  return (<>
    <div id='links-icon'>
        <div className="social" id='instagram'>    <FaInstagram/></div>
        <div className="social" id='facebook'><FaFacebook/></div>
        <div className="social" id='twitter'> <FaTwitter/></div>

    </div>
    <div className="copyright">
        <p>&copy; 1992-2024</p>
    </div>

    </>
  )
}
export default Footer;
