import { useNavigate } from "react-router-dom";

const requirements = [
  {
    title: "Java",
    evidence:
      "Listed in your verified skills and used in your Fieldstone Solutions experience.",
  },
  {
    title: "Spring Boot",
    evidence:
      "Listed in your verified skills and supported by backend API development experience.",
  },
  {
    title: "Apache Kafka",
    evidence:
      "Listed in your verified skills and added in Resume Version 4.",
  },
  {
    title: "Microservices",
    evidence:
      "Supported by your experience building scalable backend services and APIs.",
  },
];

function RequirementCard({ title, evidence }) {
  return (
    <article className="req-card">
      <div className="req-icon success">✓</div>

      <div className="req-content">
        <div className="row between requirement-title-row">
          <h2 className="t-h4">{title}</h2>
          <span className="badge badge-success">Matched</span>
        </div>

        <p className="t-bs mt8">
          <strong>Evidence:</strong> {evidence}
        </p>
      </div>
    </article>
  );
}

function MatchedRequirements() {
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
        <button className="analysis-tab active">Matched</button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/partial")}
        >
          Partial
        </button>
        <button
          className="analysis-tab"
          onClick={() => navigate("/dashboard/analysis/missing")}
        >
          Missing
        </button>
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

      <h2 className="t-h2 mt20">Strong Matches</h2>
      <p className="t-bs mb16">
        Requirements clearly supported by your verified resume.
      </p>

      <div className="requirements-list">
        {requirements.map((requirement) => (
          <RequirementCard key={requirement.title} {...requirement} />
        ))}
      </div>
    </>
  );
}

export default MatchedRequirements;