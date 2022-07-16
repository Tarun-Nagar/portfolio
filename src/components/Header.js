import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <h2><Link to="/">T D NAGAR.</Link></h2>
      <nav className='menuItems'>
        <ul className='navList'>
          <Link className='navList-item' to="/project">Project</Link>
          <Link className='navList-item' to="/skills">Skils</Link>
          <Link className='navList-item' to="/contact">contact</Link>
        </ul>
      </nav>
    </header>
  )
}