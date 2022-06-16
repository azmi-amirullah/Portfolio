import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const ExperienceDetails = ({ Title = '', Skill = '' }) => {
  return (
    <article className="experience__details" key={Title}>
      <BsPatchCheckFill className="experience__details-icons" />
      <div>
        <h4>{Title}</h4>
        <small className="text-light">{Skill}</small>
      </div>
    </article>
  )
}

export default ExperienceDetails
