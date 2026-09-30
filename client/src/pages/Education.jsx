export default function Education() {
  return (
    <main className="education-page">
      <h2>Education</h2>

      {/* Current game programming education */}
      <section className="education-entry">
        <h3>Advanced Diploma, Game Programming</h3>
        <p className="education-meta">Centennial College - Toronto, ON | Sep 2025 – Present</p>

        <ul>
          <li>Academic record to date: 9 A+ and 3 A grades</li>
          <li>Developing with Unity and HTML/CSS/JavaScript</li>
        </ul>
      </section>

      {/* Mechanical engineering technology education */}
      <section className="education-entry">
        <h3>Advanced Diploma, Mechanical Engineering Technology</h3>
        <p className="education-meta">Centennial College - Scarborough, ON | Sep 2016 – Apr 2019</p>

        <ul>
          <li>3.8 GPA</li>
          <li>Developing with Java, OpenGL, and OpenAL</li>
        </ul>
      </section>

      {/* Physics education */}
      <section className="education-entry">
        <h3>Bachelor of Science, Physics</h3>
        <p className="education-meta">York University - Toronto, ON | Sep 2005 – Apr 2010</p>

        <ul>
          <li>Recipient of R.M. Hobson Award, 2007</li>
          <li>Dean's Honour Roll, 2007</li>
        </ul>
      </section>
    </main>
  )
}