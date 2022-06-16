import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

import './footer.css'

const Footer = ({ setActiveNav }) => {
  return (
    <footer>
      <a
        href="#home"
        className="footer__logo"
        onClick={() => setActiveNav('home')}
      >
        Mohd. Azmi Amirullah. A
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home" onClick={() => setActiveNav('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setActiveNav('about')}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setActiveNav('experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setActiveNav('portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveNav('contact')}>
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/azmi-amirullah"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/azmi_amirullah"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Mohd. Azmi Amirullah. A. &copy; 2022</small>
      </div>
    </footer>
  )
}

export default Footer
