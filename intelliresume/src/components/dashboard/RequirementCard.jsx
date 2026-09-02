import React from "react";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import Badge from "./Badge";

function RequirementCard({ status, title, children }) {
  const config = {
    success: { icon: CheckCircle2, label: "Matched", badge: "success" },
    warning: { icon: AlertTriangle, label: "Partial", badge: "warning" },
    error: { icon: XCircle, label: "Missing", badge: "error" },
  }[status];

  const Icon = config.icon;

  return (
    <div className="req-card">
      <div className={`req-icon ${status}`}>
        <Icon size={16} />
      </div>

      <div className="req-content">
        <div className="row between">
          <div className="t-h4">{title}</div>
          <Badge variant={config.badge}>{config.label}</Badge>
        </div>
        <div className="t-bs mt6">{children}</div>
      </div>
    </div>
  );
}

export default RequirementCard;