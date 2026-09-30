import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="home-page">
      {/* Introductory section describing career goals */}
      <section className="hero">
        <h2>Welcome to My Portfolio</h2>

        <p className="intro">
          I am an aspiring software developer with a strong interest in
          independent game development. My goal is to professionally create
          engaging 2D and 3D games using Unity and continue developing my
          skills in programming, game design, networking, and procedural
          content generation.
        </p>
      </section>

      {/* Personal mission and development interests */}
      <section className="mission">
        <h2>Mission Statement</h2>

        <p>
          My mission is to turn creative ideas into polished, enjoyable
          interactive experiences. I hope to build successful independent games
          that can be enjoyed by players around the world, including online
          multiplayer experiences as well as single-player games.
        </p>

        <p>
          I enjoy working on both the technical and creative sides of game
          development. I am particularly interested in building systems from
          the ground up, solving difficult programming problems, and creating
          reusable tools that make future development faster and more flexible.
        </p>
      </section>

      {/* Quick navigation to the main portfolio sections */}
      <section className="home-navigation">
        <h2>Explore My Portfolio</h2>

        <div className="portfolio-links">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </section>
    </main>
  )
}