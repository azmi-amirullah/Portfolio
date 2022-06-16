import React from 'react'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import './about.css'

const About = ({ setActiveNav }) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icom"></FaAward>
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icom"></FaAward>
              <h5>Clients</h5>
              <small>200+ World wide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icom"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            2 years of total experience in Front-end Developer. <br />
            Experienced Front-end Developer with React, Javascript, ECMAScript,
            HTML5, CSS3, Bootstrap, Node.js, Mangodb. <br />
            Design, build, and maintain effecient, reusable, and reliable code.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setActiveNav('contact')}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
