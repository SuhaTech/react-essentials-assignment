import { useNavigate } from "react-router-dom";

const keywords = [
  { label: "Java", value: 100, status: "Matched", color: "success" },
  { label: "Spring Boot", value: 100, status: "Matched", color: "success" },
  { label: "Kafka", value: 88, status: "Matched", color: "success" },
  { label: "Microservices", value: 78, status: "Matched", color: "success" },
  { label: "AWS", value: 18, status: "Missing", color: "error" },
  { label: "Kubernetes", value: 12, status: "Missing", color: "error" },
];

function ATSAnalysis() {
  const navigate = useNavigate();
  const score = 84;

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
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/matched")}>
          Matched
        </button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/partial")}>
          Partial
        </button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/missing")}>
          Missing
        </button>
        <button className="analysis-tab active">ATS Analysis</button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/recs")}>
          Recommendations
        </button>
      </div>

      <div className="grid g-12-4 mt20 ats-layout">
        <section className="card card-pad">
          <div className="section-title-row">
            <div>
              <h2 className="t-h2">ATS Keyword Analysis</h2>
              <p className="t-bs mt6">
                Keyword coverage based only on your verified resume content.
              </p>
            </div>
          </div>

          <div className="ats-keywords">
            {keywords.map((keyword) => (
              <div className="kw-row" key={keyword.label}>
                <span className="kw-label">{keyword.label}</span>

                <div className="kw-track">
                  <div
                    className={`kw-fill ${keyword.color}`}
                    style={{ width: `${keyword.value}%` }}
                  />
                </div>

                <span className="kw-val">{keyword.value}%</span>
                <span className={`badge badge-${keyword.color}`}>
                  {keyword.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <aside className="card card-pad ats-score-card">
          <div className="t-cap">ATS score</div>
          <div className="ats-score">{score}<span>/100</span></div>

          <div className="progress mt12">
            <div className="progress-bar" style={{ width: `${score}%` }} />
          </div>

          <p className="t-bs mt12">
            Your resume has strong coverage for core backend engineering
            keywords.
          </p>
        </aside>
      </div>

      <section className="ai-card card-pad mt20">
        <h2 className="t-h4">Recommended Keywords</h2>

        <p className="t-bs mt6 ats-disclaimer">
          These are job-description keywords not currently verified in your
          resume. Add them only when they accurately reflect your real skills
          or experience.
        </p>

        <div className="row wrap gap10 mt16">
          <span className="skill-tag gap">AWS</span>
          <span className="skill-tag gap">Kubernetes</span>
          <span className="skill-tag gap">System Design</span>
        </div>
      </section>
    </>
  );
}

export default ATSAnalysis;