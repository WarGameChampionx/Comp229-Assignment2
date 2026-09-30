import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout     from './components/Layout'
import Home       from './pages/Home'
import AboutMe    from './pages/AboutMe'
import Projects   from './pages/Projects'
import Education  from './pages/Education'
import Services   from './pages/Services'
import ContactMe  from './pages/ContactMe'

function App() {
  return (
    <div>
      {/* Shared site header and navigation */}
      <Layout/>

      {/* Defines the page displayed for each portfolio route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  )
}

export default App