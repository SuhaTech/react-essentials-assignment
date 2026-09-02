import React from "react";
import { Sparkles, Target, Edit3, ArrowRight } from "lucide-react";
import Button from "./Button";
import ResumePreview from "./ResumePreview";

function ResumeAndInsight({ onNavigate }) {
  return (
    <div className="resume-insight-grid">

      {/* Resume Preview */}
      <div className="dashboard-card resume-preview-card">

        <div className="dashboard-card-header">
          <div>
            <div className="dashboard-card-title">
              Resume Preview
            </div>

            <div className="dashboard-card-subtitle">
              Your latest resume
            </div>
          </div>

          <Button
            variant="secondary"
            small
            icon={Edit3}
            onClick={() => onNavigate("resume")}
          >
            Edit Resume
          </Button>
        </div>

        <div className="dashboard-resume-wrapper">
          <ResumePreview />
        </div>

        <div className="resume-preview-footer">
          <span>
            Last updated recently
          </span>

          <button
            className="dashboard-link-button"
            onClick={() => onNavigate("resume")}
          >
            View full resume
            <ArrowRight size={14} />
          </button>
        </div>

      </div>


      {/* AI Insight */}
      <div className="dashboard-card ai-insight-card">

        <div className="ai-insight-header">

          <div className="ai-insight-icon">
            <Sparkles size={19} />
          </div>

          <div>
            <div className="dashboard-card-title">
              AI Insight
            </div>

            <div className="dashboard-card-subtitle">
              Personalized recommendation
            </div>
          </div>

        </div>


        <div className="ai-insight-content">

          <div className="ai-insight-highlight">
            <Sparkles size={15} />
            <span>Resume improvement</span>
          </div>

          <p>
            Your profile has strong backend fundamentals.
            Adding verified cloud experience could improve
            your match for senior backend roles.
          </p>

        </div>


        <div className="ai-insight-action">

          <Button
            variant="primary"
            small
            icon={Target}
            onClick={() => onNavigate("curation")}
          >
            Analyze a Job
          </Button>

        </div>

      </div>

    </div>
  );
}

export default ResumeAndInsight;