import { useNavigate } from "react-router-dom";

function MatchRing({ score }) {
  const radius = 46;
  const circle = 2 * Math.PI * radius;
  const offset = circle - (score / 100) * circle;

  return (
    <div className="tailored-ring">
      <svg viewBox="0 0 116 116">
        <circle
          cx="58"
          cy="58"
          r={radius}
          fill="none"
          stroke="var(--gray-200)"
          strokeWidth="10"
        />
        <circle
          cx="58"
          cy="58"
          r={radius}
          fill="none"
          stroke="var(--blue-600)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circle}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="tailored-ring-label">
        <b>{score}%</b>
        <span>Match</span>
      </div>
    </div>
  );
}

function TailoredResumeDocument() {
  return (
    <article className="resume-doc">
      <header className="resume-head">
        <div className="resume-name">Alex Morgan</div>
        <div className="resume-role">Senior Backend Engineer</div>
        <div className="resume-contact">
          alex@example.com · +91 98XXX XX210 · Bengaluru, India
        </div>
      </header>

      <section className="resume-section">
        <div className="resume-h">Professional Summary</div>
        <p className="resume-body">
          Backend engineer with experience delivering distributed,
          event-driven systems using Java and Spring Boot. Built
          Kafka-based pipelines and PostgreSQL-backed services aligned with
          modern microservice architectures.
        </p>
      </section>

      <section className="resume-section">
        <div className="resume-h">Core Skills</div>
        <div className="row wrap gap8">
          {["Java", "Spring Boot", "Kafka", "Microservices", "PostgreSQL", "Docker"].map(
            (skill) => (
              <span className="skill-tag plain" key={skill}>
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-h">Professional Experience</div>
        <div className="resume-exp-role">
          Senior Backend Engineer · Fieldstone Solutions
        </div>
        <div className="resume-exp-meta">2022 — Present</div>
        <ul className="resume-list resume-body">
          <li>Built scalable Java and Spring Boot backend services.</li>
          <li>Designed event-driven workflows using Apache Kafka.</li>
          <li>Improved API reliability and PostgreSQL query performance.</li>
        </ul>
      </section>
    </article>
  );
}

function TailoredResume() {
  const navigate = useNavigate();

  const download = (format) => {
    window.alert(`${format} download will be connected to your backend export API.`);
  };

  return (
    <>
      <div className="row between hero-row">
        <div>
          <h1 className="t-h1">Your Tailored Resume</h1>
          <p className="t-bl mt6">
            Curated for Senior Backend Engineer · Acme Technologies
          </p>
        </div>

        <div className="row gap8 wrap">
          <button className="btn btn-secondary" onClick={() => download("PDF")}>
            Download PDF
          </button>

          <button className="btn btn-secondary" onClick={() => download("DOCX")}>
            Download DOCX
          </button>

          <button
            className="btn btn-ghost"
            onClick={() => navigate("/dashboard/tailored-resume/regenerate")}
          >
            Regenerate
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/dashboard/resume/edit")}
          >
            Edit Resume
          </button>
        </div>
      </div>

      <div className="card card-pad mt20">
        <div className="steps">
          <div className="step done">
            <span className="step-dot">✓</span>
            <span className="step-label">Job details</span>
          </div>

          <span className="step-line done" />

          <div className="step done">
            <span className="step-dot">✓</span>
            <span className="step-label">AI analysis</span>
          </div>

          <span className="step-line done" />

          <div className="step done">
            <span className="step-dot">✓</span>
            <span className="step-label">Tailored resume</span>
          </div>
        </div>
      </div>

      <div className="grid g-12-4 mt20 tailored-layout">
        <section className="card card-pad">
          <TailoredResumeDocument />
        </section>

        <aside className="tailored-side">
          <div className="card card-pad tailored-score-card">
            <div className="t-cap mb10">AI Curation Summary</div>
            <MatchRing score={84} />
          </div>

          <div className="card card-pad">
            <h2 className="t-h4 mb10">Why this version is stronger</h2>

            {[
              "Emphasizes Java and Spring Boot",
              "Highlights Kafka experience",
              "Prioritizes relevant backend project",
              "Improves ATS keyword placement",
            ].map((text) => (
              <div className="row gap8 mt8 tailored-positive" key={text}>
                <span>✓</span>
                <span className="t-bs">{text}</span>
              </div>
            ))}
          </div>

          <div className="card card-pad">
            <h2 className="t-h4 mb10">Missing</h2>

            {["AWS", "Kubernetes"].map((skill) => (
              <div className="row gap8 mt8 tailored-missing" key={skill}>
                <span>!</span>
                <span className="t-bs">{skill}</span>
              </div>
            ))}
          </div>

          <div className="ai-card card-pad">
            <div className="t-h4">Verified source</div>
            <p className="t-bs mt6 tailored-verified">
              This resume uses only information from your verified resume.
            </p>
          </div>
        </aside>
      </div>
      <button
  className="btn btn-secondary"
  onClick={() => navigate("/dashboard/tailored-resume/preview")}
>
  Preview Resume
</button>
    </>
  );
}

export default TailoredResume;