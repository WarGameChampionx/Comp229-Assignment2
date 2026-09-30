import factoryImage       from '../assets/Project1.png'
import gardensImage       from '../assets/Project2.png'
import climbTheTowerImage from '../assets/Project3.png'

export default function Projects() {
  return (
    <main className="projects-page">
      <h2>Projects</h2>
      <p className="projects-intro">Here are 3 games I designed and developed</p>

      <div className="projects-list">

        {/* Factory management game project */}
        <article className="project-card">
          <img src={factoryImage} alt="Factory Through The Ages" className="project-image"/>

          <div className="project-info">
            <h3>Factory Through The Ages</h3>

            <p>
              An incremental factory-management game where players progress
              from primitive production through increasingly advanced
              technological eras. Players gather resources, research
              technologies, unlock production recipes, and automate their
              growing factory.
            </p>

            <p>
              <strong>Role:</strong> Independent Game Developer
            </p>

            <p>
              <strong>Outcome:</strong> Completed and released as a playable HTML5 browser game on itch.io.
            </p>

            <a href="https://wargamechampion.itch.io/factory-through-the-ages" target="_blank" rel="noopener noreferrer">
              View on itch.io
            </a>
          </div>
        </article>

        {/* Procedural music and gardening project */}
        <article className="project-card">
          <img src={gardensImage} alt="Gardens of Music" className="project-image"/>

          <div className="project-info">
            <h3>Gardens of Music</h3>

            <p>
              A relaxing creative sandbox that combines gardening with
              procedural music. Different plants generate musical notes at
              their own rhythms, allowing the player's garden to gradually
              become a unique, evolving musical composition.
            </p>

            <p>
              <strong>Role:</strong> Independent Game Developer
            </p>

            <p>
              <strong>Outcome:</strong> Developed into a downloadable
              simulation focused on procedural audio, creativity, and
              experimentation.
            </p>

            <a href="https://wargamechampion.itch.io/gardens-of-music" target="_blank" rel="noopener noreferrer">
              View on itch.io
            </a>
          </div>
        </article>

        {/* 3D action-platformer project */}
        <article className="project-card">
          <img src={climbTheTowerImage} alt="HM4: Climb the Tower" className="project-image"/>

          <div className="project-info">
            <h3>HM4: Climb the Tower</h3>

            <p>
              A challenging 3D action-platformer built around repeated attempts
              to climb a multi-floor tower. Players unlock heroes, equipment,
              skills, potions, and permanent improvements while learning how
              to overcome different environments and enemies.
            </p>

            <p>
              <strong>Role:</strong> Independent Game Developer
            </p>

            <p>
              <strong>Outcome:</strong> Produced and released a playable prototype featuring multiple themed tower areas, progression systems, combat, and unlockable content.
            </p>

            <a href="https://wargamechampion.itch.io/heroes-and-monsters-4" target="_blank" rel="noopener noreferrer">
              View on itch.io
            </a>
          </div>
        </article>

      </div>
    </main>
  )
}
