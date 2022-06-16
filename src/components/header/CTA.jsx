import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = ({ setActiveNav }) => {
  return (
    <div className="cta">
      <a href={CV} download="CV" className="btn">
        Download
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        onClick={() => setActiveNav('contact')}
      >
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
