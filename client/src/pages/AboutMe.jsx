import profileImage from '../assets/Photo.jpg'

export default function AboutMe() {
  return (
    <main className="about-page">
      <h2>About Me</h2>

      {/* Opens the résumé PDF in a new browser tab */}
      <a href="/Matthew Ouellette (2026).pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
        View My Résumé
      </a>

      {/* Profile image and personal introduction */}
      <div className="about-content">
        <img src={profileImage} alt="Self Portrait" className="profile-image"/>

        <div className="about-text">
          <h3>Matthew Ouellette</h3>

          <p>
            I am a game programming student with professional software
            engineering experience and a strong interest in independent game
            development. I have created many games and interactive projects
            using Unity, JavaScript, HTML, CSS, and Java. I enjoy solving
            programming challenges, building reusable systems, and continuing
            to expand my skills as both a software developer and game
            programmer.
          </p>
        </div>
      </div>
    </main>
  )
}