import { useState } from "react";

const versions = [
  {
    id: 5,
    name: "Version 5",
    when: "Today, 10:32 AM",
    note: "Updated skills and project information",
    current: true,
  },
  {
    id: 4,
    name: "Version 4",
    when: "Yesterday, 4:12 PM",
    note: "Added Kafka experience",
  },
  {
    id: 3,
    name: "Version 3",
    when: "Aug 08",
    note: "Updated professional summary",
  },
  {
    id: 2,
    name: "Version 2",
    when: "Aug 03",
    note: "Added Fieldstone Solutions role",
  },
  {
    id: 1,
    name: "Version 1",
    when: "Jul 28",
    note: "Initial resume upload and parsing",
  },
];

const changes = [
  { type: "Added", badge: "badge-success", text: "Skill: PostgreSQL" },
  { type: "Removed", badge: "badge-error", text: "Skill: MySQL" },
  {
    type: "Changed",
    badge: "badge-info",
    text: "Professional summary reworded for clarity",
  },
  {
    type: "Added",
    badge: "badge-success",
    text: "Project: FTTH GIS Connectivity Platform",
  },
];

function ResumeVersions() {
  const [compareVersion, setCompareVersion] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(5);

  return (
    <>
      <section>
        <h1 className="t-h1">Resume Versions</h1>

        <p className="t-bl mt6">
          Every change to your verified resume is saved as a new version.
        </p>

        <div className="card mt24">
          {versions.map((version, index) => (
            <div
              className="version-row"
              key={version.id}
              style={{
                borderBottom:
                  index < versions.length - 1
                    ? "1px solid var(--gray-100)"
                    : "none",
              }}
            >
              <div className="row gap14">
                <div
                  className={`version-icon ${
                    version.current ? "current" : ""
                  }`}
                >
                  {version.current ? "✓" : "◷"}
                </div>

                <div>
                  <div className="row gap8">
                    <span className="t-h4">{version.name}</span>

                    {version.current && (
                      <span className="badge badge-info">Current</span>
                    )}
                  </div>

                  <p className="t-bs mt4 version-note">
                    {version.when} — {version.note}
                  </p>
                </div>
              </div>

              <div className="row gap8 version-actions">
                {!version.current && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setCompareVersion(version)}
                  >
                    Compare
                  </button>
                )}

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedVersion(version.id)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="t-bs mt12">
          Viewing: <strong>Version {selectedVersion}</strong>
        </p>
      </section>

      {compareVersion && (
        <div className="version-modal-overlay">
          <div className="version-modal">
            <div className="version-modal-head">
              <h2 className="t-h3">
                Compare {compareVersion.name} → Version 5
              </h2>

              <button
                className="version-close"
                onClick={() => setCompareVersion(null)}
                aria-label="Close comparison"
              >
                ×
              </button>
            </div>

            <div className="version-modal-body">
              {changes.map((change, index) => (
                <div className="row gap10" key={index}>
                  <span className={`badge ${change.badge}`}>
                    {change.type}
                  </span>
                  <span className="t-body">{change.text}</span>
                </div>
              ))}
            </div>

            <div className="version-modal-foot">
              <button
                className="btn btn-ghost"
                onClick={() => setCompareVersion(null)}
              >
                Close
              </button>

              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedVersion(5);
                  setCompareVersion(null);
                }}
              >
                View Version 5
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeVersions;