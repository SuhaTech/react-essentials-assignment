import { useState } from "react";
import { useNavigate } from "react-router-dom";

const updates = [
  {
    requirement: "AWS",
    before: "Missing",
    after: "Matched",
    beforeClass: "badge-error",
    afterClass: "badge-success",
  },
  {
    requirement: "Kubernetes",
    before: "Missing",
    after: "Partial",
    beforeClass: "badge-error",
    afterClass: "badge-warning",
  },
  {
    requirement: "Kafka",
    before: "Matched",
    after: "Matched",
    beforeClass: "badge-success",
    afterClass: "badge-success",
  },
];

function RegenerateResume() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const regenerate = () => {
    setIsGenerating(true);

    window.setTimeout(() => {
      navigate("/dashboard/tailored-resume");
    }, 1600);
  };

  return (
    <>
      <h1 className="t-h1">Resume Updated</h1>

      <p className="t-bl mt6">
        You added new verified information — ready to refresh your tailored
        resume.
      </p>

      <div className="alert alert-info mt20 regenerate-alert">
        ✓ Your Resume Version 6 is saved. Regeneration only uses this verified
        resume information.
      </div>

      <div className="grid g2 mt24 regenerate-grid">
        <section className="card card-pad">
          <h2 className="t-h3">Match score improvement</h2>

          <div className="regenerate-scores mt20">
            <div>
              <span className="t-cap">Previous version</span>
              <strong>84%</strong>
            </div>

            <span className="regenerate-arrow">→</span>

            <div className="regenerate-new-score">
              <span className="t-cap">Updated version</span>
              <strong>89%</strong>
            </div>
          </div>

          <div className="progress mt20">
            <div className="progress-bar" style={{ width: "89%" }} />
          </div>

          <p className="t-bs mt12">
            Your new verified information may improve alignment with the job
            requirements.
          </p>
        </section>

        <section className="card card-pad">
          <h2 className="t-h3">What changed</h2>

          <div className="regenerate-changes mt16">
            {updates.map((item) => (
              <div className="row between regenerate-change" key={item.requirement}>
                <span className="t-label">{item.requirement}</span>

                <div className="row gap8">
                  <span className={`badge ${item.beforeClass}`}>
                    {item.before}
                  </span>
                  <span className="regenerate-change-arrow">→</span>
                  <span className={`badge ${item.afterClass}`}>
                    {item.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="row gap10 mt24">
        <button
          className="btn btn-ghost"
          onClick={() => navigate("/dashboard/tailored-resume")}
          disabled={isGenerating}
        >
          Cancel
        </button>

        <button
          className="btn btn-primary"
          onClick={regenerate}
          disabled={isGenerating}
        >
          {isGenerating ? "Regenerating…" : "✦ Regenerate Resume"}
        </button>
      </div>
    </>
  );
}

export default RegenerateResume;