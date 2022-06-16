import React from 'react'

import './experience.css'
import ExperienceDetails from './ExperienceDetails'

const Experience = () => {
  const dataFrontend = [
    { Title: 'React', Skill: 'Proficient' },
    { Title: 'JavaScript', Skill: 'Proficient' },
    { Title: 'ECMAScript', Skill: 'Proficient' },
    { Title: 'Bootstrap', Skill: 'Proficient' },
    { Title: 'HTML', Skill: 'Proficient' },
    { Title: 'CSS', Skill: 'Proficient' },
    { Title: 'SASS', Skill: 'Experience' },
    { Title: 'React Native', Skill: 'Experience' },
    { Title: 'C#', Skill: 'Experience' },
    { Title: 'ASP .NET', Skill: 'Experience' },
    { Title: 'Visual Basic .NET', Skill: 'Experience' },
    { Title: 'Java', Skill: 'Experience' }
  ]

  const dataBackend = [
    { Title: 'PHP', Skill: 'Proficient' },
    { Title: 'Mysql', Skill: 'Proficient' },
    { Title: 'Node JS', Skill: 'Experience' },
    { Title: 'MangoDB', Skill: 'Experience' }
  ]

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {dataFrontend.map(value => {
              return ExperienceDetails(value)
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {dataBackend.map(value => {
              return ExperienceDetails(value)
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
