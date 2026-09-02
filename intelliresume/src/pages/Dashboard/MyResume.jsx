import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 16V3m0 0L7 8m5-5 5 5"
        strokeWidth="2"
      />
      <path
        d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="m4 20 4.2-1 10-10a2.8 2.8 0 0 0-4-4l-10 10L4 20Z"
        strokeWidth="2"
      />
      <path
        d="m12.5 6.5 4 4"
        strokeWidth="2"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"
        strokeWidth="2"
      />
      <path
        d="m9 12 2 2 4-4"
        strokeWidth="2"
      />
    </svg>
  );
}

function ResumePreview() {
  return (
    <article className="resume-doc">
      <header className="resume-head">
        <div className="resume-name">Alex Morgan</div>

        <div className="resume-role">
          Senior Backend Engineer
        </div>

        <div className="resume-contact">
          alex@example.com · +91 98XXX XX210 · Bengaluru, India
        </div>
      </header>

      <section className="resume-section">
        <div className="resume-h">
          Professional Summary
        </div>

        <div className="resume-body">
          Backend engineer with experience building scalable APIs,
          distributed systems, and cloud-based services.
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-h">
          Skills
        </div>

        <div className="row wrap gap8">
          {[
            "Java",
            "Spring Boot",
            "Kafka",
            "PostgreSQL",
            "Docker",
            "AWS",
          ].map((skill) => (
            <span
              className="skill-tag plain"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-h">
          Experience
        </div>

        <div className="resume-exp-role">
          Senior Backend Engineer · Fieldstone Solutions
        </div>

        <div className="resume-exp-meta">
          2022 — Present
        </div>

        <ul className="resume-list resume-body">
          <li>
            Built and maintained backend services using Java
            and Spring Boot.
          </li>

          <li>
            Improved API reliability and database performance.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <div className="resume-h">
          Education
        </div>

        <div className="resume-body">
          Bachelor of Technology in Computer Science
        </div>
      </section>
    </article>
  );
}

function MyResume() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const atsScore = 84;
  const completeness = 92;

  const handleUploadClick = () => {
    document.getElementById("resume-file-input")?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOC, or DOCX file.");

      event.target.value = "";
      return;
    }

    setSelectedFile(file);

    console.log("Selected Resume:", file);
    console.log("File Name:", file.name);
    console.log("File Type:", file.type);
    console.log("File Size:", file.size);
  };

  return (
    <>
      {/* Header */}
      <div className="row between hero-row">
        <div>
          <h1 className="t-h1">
            My Resume
          </h1>

          <p className="t-bl mt6">
            Manage your verified resume information.
          </p>
        </div>

        <div className="row gap10 wrap">
          {/* View Versions */}
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() =>
              navigate("/dashboard/versions")
            }
          >
            View Versions
          </button>

          {/* Upload Resume */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleUploadClick}
          >
            <UploadIcon />
            Upload New Resume
          </button>

          {/* Hidden File Input */}
          <input
            id="resume-file-input"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Edit Resume */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              navigate("/dashboard/resume/edit")
            }
          >
            <EditIcon />
            Edit Resume
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid g-12-4 mt24 resume-page-grid">

        {/* Resume Preview */}
        <div className="card card-pad">
          <ResumePreview />
        </div>

        {/* Right Side Cards */}
        <div className="resume-side-cards">

          {/* Resume Health */}
          <div className="card card-pad">
            <div className="t-h4 mb12">
              Resume Health
            </div>

            <div className="row between mb6">
              <span className="t-bs">
                ATS Score
              </span>

              <span className="t-label">
                {atsScore}/100
              </span>
            </div>

            <div className="progress mb16">
              <div
                className="progress-bar"
                style={{
                  width: `${atsScore}%`,
                }}
              />
            </div>

            <div className="row between mb6">
              <span className="t-bs">
                Profile Completeness
              </span>

              <span className="t-label">
                {completeness}%
              </span>
            </div>

            <div className="progress">
              <div
                className="progress-bar success"
                style={{
                  width: `${completeness}%`,
                }}
              />
            </div>

            <hr className="divider mt16 mb16" />

            <div className="row between">
              <span className="t-bs">
                Last updated
              </span>

              <span className="t-label">
                Today
              </span>
            </div>

            <div className="row between mt8">
              <span className="t-bs">
                Version
              </span>

              <span className="t-label">
                Version 5
              </span>
            </div>
          </div>

          {/* Verified Source */}
          <div className="ai-card card-pad">
            <div className="row gap8 mb8">
              <ShieldIcon />

              <span className="t-h4">
                Verified source
              </span>
            </div>

            <div className="t-bs resume-verified-copy">
              This information is used as the trusted source
              for AI resume curation. IntelliResume never adds
              skills or experience you haven't entered here.
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default MyResume;