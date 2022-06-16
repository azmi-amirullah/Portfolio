import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsDisplay } from 'react-icons/bs'
import { MdLibraryAddCheck } from 'react-icons/md'

import './nav.css'

const Nav = ({ ActiveNav, setActiveNav }) => {
  const getActiveNav = className => {
    return className === ActiveNav ? 'active' : ''
  }

  return (
    <nav>
      <a
        href="#home"
        className={getActiveNav('home')}
        onClick={() => setActiveNav('home')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={getActiveNav('about')}
        onClick={() => setActiveNav('about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={getActiveNav('experience')}
        onClick={() => setActiveNav('experience')}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={getActiveNav('portfolio')}
        onClick={() => setActiveNav('portfolio')}
      >
        <BsDisplay />
      </a>
      <a
        href="#projects"
        className={getActiveNav('projects')}
        onClick={() => setActiveNav('projects')}
      >
        <MdLibraryAddCheck />
      </a>
      <a
        href="#contact"
        className={getActiveNav('contact')}
        onClick={() => setActiveNav('contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
