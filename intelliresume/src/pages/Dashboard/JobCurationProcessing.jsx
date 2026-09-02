import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  "Job description received",
  "Extracting job requirements",
  "Comparing requirements with your resume",
  "Preparing tailored resume",
  "Generating recommendations",
];

function JobCurationProcessing() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length - 1) return;

    const timer = window.setTimeout(() => {
      setCurrentStep((step) => step + 1);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [currentStep]);

  const completed = currentStep === steps.length - 1;

  return (
    <section className="processing-page">
      <div className="processing-icon">✦</div>

      <h1 className="t-h1 mt16">Curating your resume</h1>

      <p className="t-bl mt8 processing-copy">
        IntelliResume is comparing the job requirements with your verified
        resume information.
      </p>

      <div className="card card-pad processing-card mt28">
        <div className="tl">
          {steps.map((step, index) => {
            const status =
              index < currentStep
                ? "done"
                : index === currentStep
                  ? "active"
                  : "pending";

            return (
              <div className="tl-item" key={step}>
                <div className="tl-marker">
                  <div className={`tl-dot ${status}`}>
                    {status === "done" ? "✓" : status === "active" ? "…" : ""}
                  </div>

                  {index < steps.length - 1 && (
                    <div className={`tl-bar ${index < currentStep ? "done" : ""}`} />
                  )}
                </div>

                <div className="tl-text">
                  <div className={`tl-title ${status === "pending" ? "pending" : ""}`}>
                    {step}
                  </div>

                  <div className="tl-sub">
                    {status === "done" && "Completed"}
                    {status === "active" && "In progress…"}
                    {status === "pending" && "Waiting"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {completed && (
          <div className="alert alert-info mt16">
            Your resume analysis is ready. Review matches and recommendations.
          </div>
        )}
      </div>

      <div className="row gap10 mt24 processing-actions">
        <button
          className="btn btn-ghost"
          onClick={() => navigate("/dashboard/curation")}
        >
          Cancel
        </button>

        {completed && (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/dashboard/analysis")}
          >
            View Analysis
          </button>
        )}
      </div>
    </section>
  );
}

export default JobCurationProcessing;