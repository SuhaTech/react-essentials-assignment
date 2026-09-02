import { useLocation, useNavigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const routeToId = {
    "/dashboard": "dashboard",
    "/dashboard/resume": "resume",
    "/dashboard/curation": "curation",
    "/dashboard/analysis": "analysis",
    "/dashboard/versions": "versions",
    "/dashboard/settings": "settings",
  };

  const active = routeToId[location.pathname] || "dashboard";

  const onNavigate = (id) => {
    const routes = {
      dashboard: "/dashboard",
      resume: "/dashboard/resume",
      curation: "/dashboard/curation",
      analysis: "/dashboard/analysis",
      versions: "/dashboard/versions",
      settings: "/dashboard/settings",
    };

    navigate(routes[id]);
  };

  return (
    <div className="p-root">
      <div className="appwrap">
        <Sidebar active={active} onNavigate={onNavigate} />

        <div className="app-main">
          <Topbar title={active} />

          <main className="app-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;