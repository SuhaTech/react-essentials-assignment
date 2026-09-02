import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  User,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import StatCard from "./StatCard";
import { candidate } from "../../data/candidate";

function DashboardStats() {
  return (
    <div className="dashboard-stats-grid">

      <StatCard
        label="Resume Health"
        value={`${candidate.health}%`}
        sub="2 items to review"
        icon={CheckCircle2}
        tone="green"
      />

      <StatCard
        label="ATS Score"
        value={`${candidate.atsScore}/100`}
        sub="Above average for role"
        icon={ShieldCheck}
        tone="blue"
      />

      <StatCard
        label="Profile Completeness"
        value={`${candidate.completeness}%`}
        sub="Certifications incomplete"
        icon={User}
        tone="amber"
      />

      <StatCard
        label="Job Curations"
        value="6"
        sub="3 this week"
        icon={Layers3}
        tone="gray"
      />

    </div>
  );
}

export default DashboardStats;