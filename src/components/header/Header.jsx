import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'

import './header.css'
import HeaderSocial from './HeaderSocial'

const Header = ({ setActiveNav }) => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, My Name</h5>
        <h1>Mohd. Azmi Amirullah. A</h1>
        <h5 className="text-light">Front-end Developer | React</h5>
        <CTA setActiveNav={setActiveNav} />
        <HeaderSocial />

        <div>
          <div className="me-bg">
            <div className="me">
              <img src={ME} alt="me" />
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="scroll__down"
          onClick={() => setActiveNav('contact')}
        >
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
