import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaLinkedin } from "react-icons/fa"
import {AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import Logo from "../images/logof.png"

const Footer = () => {
  return (
    <>
 <footer>
    <div className="container footer-container">
        <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt="footer Logo" className="footer-logo"/>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat quisquam veniam!</p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"> <FaLinkedin/> </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> <FaFacebook/> </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"> <AiOutlineTwitter/> </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"> <AiFillInstagram/> </a>
            </div>
        </article>
        <article>
          <h4>permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainer">Trainer</Link>
          <Link to="/galary">Galary</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>

        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Plans</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">communites</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Faq</Link>

        </article>
        <article>
          <h4>get in touch</h4>
          
          <Link to="/s">meet</Link>
          <Link to="/s">rooms</Link>
          <Link to="/s">peoples</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/s">Support</Link>

        </article>
    </div>
    <div className="footer-copyright">
      <small>2023 &copy; All Rights Reserved</small>
    </div>
 </footer>
    </>
  )
}

export default Footer