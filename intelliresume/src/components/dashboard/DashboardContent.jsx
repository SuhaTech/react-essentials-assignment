import DashboardHero from "./DashboardHero";
import DashboardStats from "./DashboardStats";
import ResumeAndInsight from "./ResumeAndInsight";
import RecentJobCurations from "./RecentJobCurations";

function DashboardContent({ onNavigate }) {
  return (
    <div className="dashboard-page">

      <DashboardHero onNavigate={onNavigate} />

      <DashboardStats />

      <ResumeAndInsight onNavigate={onNavigate} />

      <RecentJobCurations onNavigate={onNavigate} />

    </div>
  );
}

export default DashboardContent;