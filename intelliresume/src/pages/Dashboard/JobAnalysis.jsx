import { useNavigate } from "react-router-dom";

const tabs = [
  ["overview", "Overview"],
  ["matched", "Matched"],
  ["partial", "Partial"],
  ["missing", "Missing"],
  ["ats", "ATS Analysis"],
  ["recs", "Recommendations"],
];

function MatchRing({ score }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="analysis-ring">
      <svg viewBox="0 0 132 132">
        <circle
          cx="66"
          cy="66"
          r={radius}
          fill="none"
          stroke="var(--gray-200)"
          strokeWidth="10"
        />
        <circle
          cx="66"
          cy="66"
          r={radius}
          fill="none"
          stroke="var(--blue-600)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <div className="analysis-ring-center">
        <span>{score}%</span>
        <small>Match</small>
      </div>
    </div>
  );
}

function AnalysisStat({ label, count, type }) {
  return (
    <div className={`card card-pad analysis-stat ${type}`}>
      <div className="row gap10">
        <span className="analysis-stat-icon">
          {type === "matched" ? "✓" : type === "partial" ? "!" : "×"}
        </span>
        <span className="t-cap">{label}</span>
      </div>

      <div className="stat-value mt8">{count}</div>
      <div className="t-bs">requirements</div>
    </div>
  );
}

function JobAnalysis() {
  const navigate = useNavigate();
  const score = 84;

  const openTab = (id) => {
    if (id === "overview") {
      navigate("/dashboard/analysis");
      return;
    }

    navigate(`/dashboard/analysis/${id}`);
  };

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

          <div className="step current">
            <span className="step-dot">3</span>
            <span className="step-label">Tailored resume</span>
          </div>
        </div>
      </div>

      <div className="analysis-tabs mt20">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            className={`analysis-tab ${id === "overview" ? "active" : ""}`}
            onClick={() => openTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="card card-pad mt20">
        <div className="analysis-summary">
          <MatchRing score={score} />

          <div>
            <h2 className="t-h2">Strong Match</h2>
            <p className="t-body mt8">
              Your resume is a strong match for this role. Your strongest areas
              are Java, Spring Boot, Kafka and microservices. AWS experience is
              not currently present in your verified resume.
            </p>
          </div>
        </div>
      </div>

      <div className="grid g3 mt20">
        <AnalysisStat label="Matched" count="12" type="matched" />
        <AnalysisStat label="Partial" count="3" type="partial" />
        <AnalysisStat label="Missing" count="2" type="missing" />
      </div>

      <div className="ai-card card-pad mt20">
        <div className="analysis-notice-icon">⌾</div>
        <p className="t-bs mt6 analysis-notice-copy">
          This analysis is grounded in your verified resume (Version 5). Missing
          requirements are never automatically added to your resume.
        </p>
      </div>
    </>
  );
}

export default JobAnalysis;