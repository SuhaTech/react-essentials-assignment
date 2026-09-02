import React from "react";
import { Target, Sparkles } from "lucide-react";
import Button from "./Button";

function DashboardHero({ onNavigate }) {
  const userData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const userName = userData.name || "User";

  return (
    <div className="dashboard-hero">

      <div className="dashboard-hero-content">

        <div className="dashboard-welcome-badge">
          <Sparkles size={14} />
          <span>AI-powered resume dashboard</span>
        </div>

        <h1 className="dashboard-hero-title">
          Good morning, {userName}
        </h1>

        <p className="dashboard-hero-description">
          Your resume is ready. Explore opportunities and tailor it
          for specific jobs.
        </p>

      </div>

      <Button
        icon={Target}
        onClick={() => onNavigate("curation")}
      >
        Curate Resume for a Job
      </Button>

    </div>
  );
}

export default DashboardHero;