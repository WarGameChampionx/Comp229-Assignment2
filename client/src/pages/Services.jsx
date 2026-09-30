export default function Services() {
  return (
    <main className="services-page">
      <h2>Services</h2>

      <div className="services-list">

        {/* Web development services */}
        <section className="service-card">
          <h3>Web Development</h3>
          <p>
            Development of small websites and web applications using
            HTML, CSS, JavaScript, and React. This can include portfolio
            sites, simple interactive applications, and front-end updates.
          </p>
        </section>

        {/* Game development services */}
        <section className="service-card">
          <h3>Game Development</h3>
          <p>
            Assistance with small game development projects, particularly
            projects created with Unity. This may include gameplay systems,
            debugging, prototyping, and general programming support.
          </p>
        </section>

        {/* Programming tutoring services */}
        <section className="service-card">
          <h3>Programming Tutoring</h3>
          <p>
            One-on-one tutoring for students learning programming concepts
            and languages such as C#, Java, JavaScript, HTML, and CSS.
            Topics can include fundamentals, object-oriented programming,
            debugging, and project development.
          </p>
        </section>

        {/* Software prototyping services */}
        <section className="service-card">
          <h3>Software Prototyping</h3>
          <p>
            Creation of small software prototypes and proof-of-concept
            applications to test ideas, demonstrate functionality, or help
            determine how a larger project could be developed.
          </p>
        </section>

      </div>
    </main>
  )
}