import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" strokeWidth="2" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" strokeWidth="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" strokeWidth="2" />
    </svg>
  );
}

function JobCuration() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("Senior Backend Engineer");
  const [jobDescription, setJobDescription] = useState(
    "We're looking for a Senior Backend Engineer to join our platform team. You'll design and scale distributed systems using Java, Spring Boot, and Kafka, deploy services to AWS and Kubernetes, and mentor 1–2 engineers. 5+ years of backend experience required."
  );
  const [tailorResume, setTailorResume] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!jobTitle.trim() || !jobDescription.trim()) {
      setError("Please enter both the job title and job description.");
      return;
    }

    setError("");
    navigate("/dashboard/curation/processing");
  };

  return (
    <>
      <h1 className="t-h1">Curate Your Resume for a Job</h1>

      <p className="t-bl mt6 curation-description">
        Tailor your resume using the job requirements while keeping every
        candidate detail grounded in your verified resume.
      </p>

      <div className="card card-pad mt24">
        <div className="steps">
          <div className="step current">
            <span className="step-dot">1</span>
            <span className="step-label">Job details</span>
          </div>

          <span className="step-line" />

          <div className="step">
            <span className="step-dot">2</span>
            <span className="step-label">AI analysis</span>
          </div>

          <span className="step-line" />

          <div className="step">
            <span className="step-dot">3</span>
            <span className="step-label">Tailored resume</span>
          </div>
        </div>
      </div>

      <div className="grid g-12-4 mt24 curation-grid">
        <form className="card card-pad" onSubmit={handleSubmit}>
          <label className="field mb20">
            <span className="t-label">Job Title</span>
            <input
              type="text"
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
              placeholder="e.g. Senior Backend Engineer"
            />
          </label>

          <label className="field">
            <span className="t-label">Job Description</span>
            <textarea
              rows="10"
              maxLength="6000"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the complete job description here…"
            />

            <span className="char-count">
              {jobDescription.length.toLocaleString()} / 6,000
            </span>
          </label>

          <div className="alert alert-info mt20">
            <ShieldIcon />
            <div className="t-bs curation-alert-copy">
              IntelliResume will only use information already present in your
              verified resume. It will not invent skills, experience, projects,
              certifications, or achievements.
            </div>
          </div>

          <label className="row gap8 mt16 curation-checkbox">
            <input
              type="checkbox"
              checked={tailorResume}
              onChange={(event) => setTailorResume(event.target.checked)}
            />
            Curate my resume specifically for this job
          </label>

          {error && <p className="curation-error mt12">{error}</p>}

          <div className="row gap10 mt24">
            <button className="btn btn-primary" type="submit">
              <SparkleIcon />
              Analyze & Curate Resume
            </button>

            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>

        <aside className="card card-pad">
          <div className="t-cap mb12">Your Current Resume</div>
          <div className="t-h4">Alex Morgan</div>
          <div className="t-bs">Senior Backend Engineer</div>

          <hr className="divider mt14 mb14" />

          <div className="row between">
            <span className="t-bs">Resume version</span>
            <span className="t-label">Version 5 — Updated today</span>
          </div>

          <div className="row between mt10">
            <span className="t-bs">Status</span>
            <span className="badge badge-success">✓ Ready for AI curation</span>
          </div>
        </aside>
      </div>
    </>
  );
}

export default JobCuration;