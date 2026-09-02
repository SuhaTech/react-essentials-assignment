import { useState } from "react";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeWidth="2" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M10 17l5-5-5-5" strokeWidth="2" />
      <path d="M15 12H3" strokeWidth="2" />
      <path d="M21 19V5a2 2 0 0 0-2-2h-5" strokeWidth="2" />
    </svg>
  );
}

function SettingRow({ label, value, children }) {
  return (
    <div
      className="row between"
      style={{
        padding: "14px 0",
        borderBottom: "1px solid var(--gray-100)",
      }}
    >
      <div>
        <div className="t-label">{label}</div>
        {value && <div className="t-bs mt4">{value}</div>}
      </div>

      <div>{children}</div>
    </div>
  );
}

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${value ? "is-on" : ""}`}
      onClick={() => onChange(!value)}
      aria-label="Toggle setting"
      aria-pressed={value}
    >
      <span />
    </button>
  );
}

function Settings() {
  const [aiCuration, setAiCuration] = useState(true);
  const [atsAnalysis, setAtsAnalysis] = useState(true);

  return (
    <>
      <div className="t-h1">Settings</div>

      <div className="grid g2 mt24" style={{ alignItems: "flex-start" }}>
        <div className="card card-pad">
          <div className="t-h3 mb8">Account</div>

          <SettingRow label="Name" value="Alex Morgan">
            <button className="btn btn-ghost btn-sm">Edit</button>
          </SettingRow>

          <SettingRow label="Email" value="alex@example.com">
            <button className="btn btn-ghost btn-sm">Edit</button>
          </SettingRow>

          <SettingRow label="Phone" value="+91 98XXX XX210">
            <button className="btn btn-ghost btn-sm">Edit</button>
          </SettingRow>
        </div>

        <div className="card card-pad">
          <div className="t-h3 mb8">Resume Preferences</div>

          <SettingRow label="Default resume format" value="PDF">
            <button className="btn btn-ghost btn-sm">Change</button>
          </SettingRow>

          <SettingRow
            label="Default resume template"
            value="Modern — Single Column"
          >
            <button className="btn btn-ghost btn-sm">Change</button>
          </SettingRow>
        </div>

        <div className="card card-pad">
          <div className="t-h3 mb8">AI Preferences</div>

          <SettingRow
            label="AI-assisted resume curation"
            value="Use verified resume data to tailor resumes for jobs"
          >
            <Toggle value={aiCuration} onChange={setAiCuration} />
          </SettingRow>

          <SettingRow
            label="ATS analysis"
            value="Automatically score new resume versions"
          >
            <Toggle value={atsAnalysis} onChange={setAtsAnalysis} />
          </SettingRow>
        </div>

        <div className="card card-pad">
          <div className="t-h3 mb8">Privacy</div>

          <div className="t-bs">
            Your resume information is used to generate and analyze your
            resumes. It is never shared with employers directly or used to
            fabricate experience.
          </div>
        </div>

        <div className="card card-pad security-card">
  <div className="t-h3 mb8">Security</div>

  <div className="security-actions">
    <button className="btn btn-secondary">
      <LockIcon />
      Change Password
    </button>

    <button className="btn btn-danger">
      <LogoutIcon />
      Log Out
    </button>
  </div>
</div>
      </div>
    </>
  );
}

export default Settings;