import { useNavigate } from "react-router-dom";

const requirements = [
  {
    title: "5+ years of backend development",
    candidate: "4 years of verified backend engineering experience",
    required: "5+ years",
    note: "Your experience is relevant, but below the stated requirement.",
  },
  {
    title: "AWS cloud deployment",
    candidate: "Docker listed in verified skills; no AWS deployment evidence found.",
    required: "Production deployment experience with AWS",
    note: "Some infrastructure experience is present, but AWS is not verified.",
  },
  {
    title: "Mentoring engineers",
    candidate: "Collaboration and code-review experience is present.",
    required: "Mentor 1–2 engineers",
    note: "Leadership or formal mentoring responsibility is not clearly verified.",
  },
];

function PartialCard({ title, candidate, required, note }) {
  return (
    <article className="req-card">
      <div className="req-icon warning">!</div>

      <div className="req-content">
        <div className="row between requirement-title-row">
          <h2 className="t-h4">{title}</h2>
          <span className="badge badge-warning">Partial Match</span>
        </div>

        <div className="partial-comparison mt12">
          <div>
            <span className="t-cap">Your verified resume</span>
            <p className="t-bs mt4">{candidate}</p>
          </div>

          <div>
            <span className="t-cap">Job requirement</span>
            <p className="t-bs mt4">{required}</p>
          </div>
        </div>

        <p className="t-bs mt12 partial-note">{note}</p>
      </div>
    </article>
  );
}

function PartialRequirements() {
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
        <button className="analysis-tab active">Partial</button>
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

      <h2 className="t-h2 mt20">Partial Matches</h2>
      <p className="t-bs mb16">
        Requirements with relevant evidence, but incomplete or below the stated
        requirement.
      </p>

      <div className="requirements-list">
        {requirements.map((requirement) => (
          <PartialCard key={requirement.title} {...requirement} />
        ))}
      </div>
    </>
  );
}

export default PartialRequirements;