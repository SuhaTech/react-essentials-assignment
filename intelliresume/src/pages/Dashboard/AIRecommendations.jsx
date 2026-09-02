import { useNavigate } from "react-router-dom";

const recommendations = [
  {
    title: "Highlight backend impact in your summary",
    body:
      "Move your Java, Spring Boot, Kafka, and scalable API experience into the first two lines of your professional summary.",
    action: "Update My Resume",
  },
  {
    title: "Make your Kafka experience more visible",
    body:
      "Add a concise, verified bullet under your relevant role or project that explains how you used Kafka.",
    action: "Update My Resume",
  },
  {
    title: "Use job-aligned language",
    body:
      "When accurate, use the same role terms from the job description, such as distributed systems, backend services, and microservices.",
    action: "Update My Resume",
  },
];

function AIRecommendations() {
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
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/matched")}>
          Matched
        </button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/partial")}>
          Partial
        </button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/missing")}>
          Missing
        </button>
        <button className="analysis-tab" onClick={() => navigate("/dashboard/analysis/ats")}>
          ATS Analysis
        </button>
        <button className="analysis-tab active">Recommendations</button>
      </div>

      <h2 className="t-h2 mt20">AI Recommendations</h2>
      <p className="t-bs mb16">
        Suggestions based on the job requirements and your verified resume.
      </p>

      <div className="recommendations-list">
        {recommendations.map((recommendation, index) => (
          <article className="ai-card card-pad recommendation-card" key={recommendation.title}>
            <div className="recommendation-number">{index + 1}</div>

            <div className="recommendation-content">
              <h3 className="t-h4">{recommendation.title}</h3>
              <p className="t-bs mt8 recommendation-copy">
                {recommendation.body}
              </p>

              <button
                className="btn btn-secondary btn-sm mt16"
                onClick={() => navigate("/dashboard/resume/edit")}
              >
                {recommendation.action}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="alert alert-info mt20">
        Recommendations never add information automatically. Update your resume
        only with details that are accurate and verifiable.
      </div>
    </>
  );
}

export default AIRecommendations;