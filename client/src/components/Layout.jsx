import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Layout() {
  return (
    <>
      <header>
        {/* Portfolio logo and site title */}
        <div className="title-area">
          <img src={logo} alt="Portfolio Logo" className="logo"/>
          <h1>My Portfolio</h1>
        </div>

        {/* Main site navigation */}
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/about">About Me</Link>{' | '}
          <Link to="/projects">Projects</Link>{' | '}
          <Link to="/education">Education</Link>{' | '}
          <Link to="/services">Services</Link>{' | '}
          <Link to="/contact">Contact Me</Link>
        </nav>

        <hr />
      </header>
    </>
  )
}