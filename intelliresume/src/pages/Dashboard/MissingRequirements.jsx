import { useNavigate } from "react-router-dom";

const requirements = [
  {
    title: "AWS",
    required: "Hands-on AWS cloud deployment experience",
    note: "AWS is not present in your verified skills, experience, projects, or certifications.",
  },
  {
    title: "Kubernetes",
    required: "Deploy and manage services using Kubernetes",
    note: "Kubernetes is not present in your verified resume information.",
  },
];

function MissingCard({ title, required, note, onUpdateResume }) {
  return (
    <article className="req-card">
      <div className="req-icon error">×</div>

      <div className="req-content">
        <div className="row between requirement-title-row">
          <h2 className="t-h4">{title}</h2>
          <span className="badge badge-error">Missing</span>
        </div>

        <div className="missing-requirement mt12">
          <span className="t-cap">Job requirement</span>
          <p className="t-bs mt4">{required}</p>
        </div>

        <p className="t-bs mt12 missing-note">{note}</p>

        <button className="btn btn-secondary btn-sm mt16" onClick={onUpdateResume}>
          Update My Resume
        </button>
      </div>
    </article>
  );
}

function MissingRequirements() {
  const navigate = useNavigate();

  return (
    <>
      <div className="row between hero-row">
        <div>
          <h1 className="t-h1">Job Match Analysis</h1>
          <p className="t-bl mt6">Senior Backend Engineer · Acme Technologies</p>
        </div>

        <div className="row gap8 wrap">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard/resume/edit")}
          >
            Edit Resume
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/dashboard/tailored-resume")}
          >
            View Tailored Resume →
          </button>
        </div>
      </div>

      <div className="analysis-tabs mt20">
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis")}>
          Overview
        </button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/matched")}
        >
          Matched
        </button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/partial")}
        >
          Partial
        </button>
        <button className="analysis-tab active">Missing</button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/ats")}
        >
          ATS Analysis
        </button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/recs")}
        >
          Recommendations
        </button>
      </div>

      <h2 className="t-h2 mt20">Missing Requirements</h2>
      <p className="t-bs mb16">
        Requirements not found in your verified resume. They are never added
        automatically.
      </p>

      <div className="alert alert-warning mb16">
        <div>
          Add missing information only when it is accurate and you can verify it
          from your real experience.
        </div>
      </div>

      <div className="requirements-list">
        {requirements.map((requirement) => (
          <MissingCard
            key={requirement.title}
            {...requirement}
            onUpdateResume={() => navigate("/dashboard/resume/edit")}
          />
        ))}
      </div>
    </>
  );
}

export default MissingRequirements;