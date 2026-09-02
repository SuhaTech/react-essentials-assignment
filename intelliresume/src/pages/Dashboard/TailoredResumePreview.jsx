import { useNavigate } from "react-router-dom";

function TailoredResumePreview() {
  const navigate = useNavigate();

  const downloadPdf = () => {
    window.alert("PDF download ko backend export API se connect karna hoga.");
  };

  return (
    <>
      <div className="row between hero-row">
        <h1 className="t-h1">Tailored Resume Preview</h1>

        <div className="row gap8">
          <button className="btn btn-primary" onClick={downloadPdf}>
            Download PDF
          </button>

          <button
            className="btn btn-ghost"
            onClick={() => navigate("/dashboard/tailored-resume")}
          >
            Close Preview
          </button>
        </div>
      </div>

      <div className="a4-preview-wrap mt24">
        <article className="a4-resume">
          <header className="a4-header">
            <h2>Alex Morgan</h2>
            <div>Senior Backend Engineer</div>
            <p>alex@example.com · +91 98XXX XX210 · Bengaluru, India</p>
          </header>

          <section className="a4-section">
            <h3>Professional Summary</h3>
            <p>
              Backend software engineer with experience delivering distributed,
              event-driven systems in Java and Spring Boot. Proven track record
              building Kafka-based pipelines and PostgreSQL-backed services
              aligned with modern microservice architectures.
            </p>
          </section>

          <section className="a4-section">
            <h3>Core Skills</h3>
            <div className="row wrap gap8">
              {[
                "Java",
                "Spring Boot",
                "Kafka",
                "Microservices",
                "PostgreSQL",
                "Docker",
              ].map((skill) => (
                <span className="skill-tag plain" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="a4-section">
            <h3>Professional Experience</h3>

            <div className="a4-role">
              Senior Backend Engineer · Fieldstone Solutions
            </div>
            <div className="a4-meta">2022 — Present</div>
            <ul>
              <li>
                Built and maintained scalable Java and Spring Boot backend
                services.
              </li>
              <li>
                Designed Kafka-based event-driven workflows for reliable data
                processing.
              </li>
              <li>
                Improved API performance and PostgreSQL query efficiency.
              </li>
            </ul>

            <div className="a4-role mt16">
              Backend Engineer · Nexa Technologies
            </div>
            <div className="a4-meta">2019 — 2022</div>
            <ul>
              <li>Developed REST APIs and internal platform integrations.</li>
              <li>Worked with product teams to deliver reliable services.</li>
            </ul>
          </section>

          <section className="a4-section">
            <h3>Projects</h3>
            <div className="a4-role">FTTH GIS Connectivity Platform</div>
            <p>
              Built backend services supporting connectivity workflows and
              platform integrations.
            </p>
          </section>

          <section className="a4-section">
            <h3>Education</h3>
            <p>Bachelor of Technology in Computer Science</p>
          </section>
        </article>
      </div>
    </>
  );
}

export default TailoredResumePreview;