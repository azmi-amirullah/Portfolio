import React from 'react'

import './portfolio.css'

import Img from '../../assets/portfolio1.png'

const Portfolio = () => {
  const data = [
    {
      Image: Img,
      Title: 'Portfolio',
      Github: 'https://github.com/azmi-amirullah/portfolio',
      Demo: '/'
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ Image, Title, Github, Demo }, index) => {
          return (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <img src={Image} alt={Title} />
              </div>
              <h3>{Title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={Github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={Demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
