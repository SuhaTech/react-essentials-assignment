import React from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Button from "./Button";
import Badge from "./Badge";

function RecentJobCurations({ onNavigate }) {

  const curations = [
    ["Senior Backend Engineer", 87, "Updated 2 hours ago"],
    ["Java Spring Boot Developer", 82, "Updated yesterday"],
    ["Software Engineer", 76, "Updated 3 days ago"],
  ];

  return (
    <section className="recent-curations-section">

      <div className="section-title-row">

        <div>
          <div className="t-h2">
            Recent Job Curations
          </div>

          <p className="dashboard-section-subtitle">
            Your latest job matching activity
          </p>
        </div>

        <Button
          variant="ghost"
          small
          onClick={() => onNavigate("curation")}
        >
          View all
        </Button>

      </div>


      <div className="recent-curations-grid">

        {curations.map(([title, match, updated]) => (

          <div
            className="job-curation-card"
            key={title}
          >

            <div className="job-card-top">

              <div className="job-icon">
                <BriefcaseBusiness size={17} />
              </div>

              <Badge
                variant={
                  match >= 85
                    ? "success"
                    : "info"
                }
              >
                {match}% Match
              </Badge>

            </div>


            <div className="job-card-title">
              {title}
            </div>

            <div className="job-card-updated">
              {updated}
            </div>


            <div className="job-match-row">

              <div className="job-match-label">
                <span>Match score</span>
                <strong>{match}%</strong>
              </div>

              <div className="job-progress">
                <div
                  className="job-progress-bar"
                  style={{
                    width: `${match}%`,
                  }}
                />
              </div>

            </div>


            <div className="job-card-footer">

              <span>
                Resume version v5
              </span>

              <button
                className="dashboard-link-button"
                onClick={() =>
                  onNavigate("analysis")
                }
              >
                Analysis
                <ArrowRight size={13} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecentJobCurations;