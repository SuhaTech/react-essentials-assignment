import { useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  "Personal Information",
  "Summary",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Certifications",
  "Languages",
  "Achievements",
];

function ResumeEditor() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Skills");
  const [skills, setSkills] = useState([
    "Java",
    "Spring Boot",
    "Kafka",
    "PostgreSQL",
    "Docker",
    "AWS",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [saved, setSaved] = useState(false);

  const addSkill = () => {
    const skill = newSkill.trim();

    if (skill && !skills.includes(skill)) {
      setSkills((currentSkills) => [...currentSkills, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills((currentSkills) =>
      currentSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const saveChanges = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <h1 className="t-h1">Resume Editor</h1>
      <p className="t-bl mt6">
        Edit the structured information used as your verified resume source.
      </p>

      {saved && (
        <div className="alert alert-info mt16">
          Resume changes saved successfully.
        </div>
      )}

      <div className="editor-layout mt24">
        <aside className="card editor-nav">
          {sections.map((section) => (
            <button
              key={section}
              className={`editor-section ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {activeSection === section && <span>✓</span>}
              {section}
            </button>
          ))}
        </aside>

        <section className="card card-pad">
          {activeSection !== "Skills" && (
            <div className="alert alert-info mb16">
              Select <strong>Skills</strong> to edit the reference screen’s
              active section. Other sections can be added using the same layout.
            </div>
          )}

          <div className="row between mb16">
            <h2 className="t-h3">Skills</h2>

            <div className="row gap8">
              <input
                className="editor-add-input"
                value={newSkill}
                onChange={(event) => setNewSkill(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") addSkill();
                }}
                placeholder="Add a skill"
              />

              <button className="btn btn-secondary btn-sm" onClick={addSkill}>
                + Add Skill
              </button>
            </div>
          </div>

          <div className="row wrap gap10">
            {skills.map((skill) => (
              <span className="skill-tag editor-skill" key={skill}>
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  aria-label={`Remove ${skill}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <hr className="divider mt24 mb24" />

          <div className="row between mb16">
            <h2 className="t-h3">Experience</h2>
            <button className="btn btn-secondary btn-sm">+ Add Entry</button>
          </div>

          <div className="editor-experience-card">
            <div className="row between">
              <div>
                <div className="t-h4">
                  Senior Backend Engineer · Fieldstone Solutions
                </div>
                <div className="t-bs mt4">2022 — Present</div>
              </div>

              <div className="row gap8">
                <button className="btn btn-ghost btn-sm">Edit</button>
                <button className="btn btn-ghost btn-sm">Remove</button>
              </div>
            </div>
          </div>

          <div className="editor-experience-card">
            <div className="row between">
              <div>
                <div className="t-h4">
                  Backend Engineer · Nexa Technologies
                </div>
                <div className="t-bs mt4">2019 — 2022</div>
              </div>

              <div className="row gap8">
                <button className="btn btn-ghost btn-sm">Edit</button>
                <button className="btn btn-ghost btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </section>

        <aside className="card card-pad editor-preview-card">
          <div className="t-cap mb12">Live Preview</div>

          <div className="preview-box">
            <div className="resume-doc">
              <header className="resume-head">
                <div className="resume-name">Alex Morgan</div>
                <div className="resume-role">Senior Backend Engineer</div>
                <div className="resume-contact">
                  alex@example.com · Bengaluru, India
                </div>
              </header>

              <section className="resume-section">
                <div className="resume-h">Skills</div>
                <div className="row wrap gap6">
                  {skills.map((skill) => (
                    <span className="skill-tag plain" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="resume-section">
                <div className="resume-h">Experience</div>
                <div className="resume-exp-role">
                  Senior Backend Engineer
                </div>
                <div className="resume-exp-meta">
                  Fieldstone Solutions · 2022 — Present
                </div>
                <div className="resume-body">
                  Built scalable backend services and APIs.
                </div>
              </section>
            </div>
          </div>
        </aside>
      </div>

      <div className="row editor-footer">
        <button
          className="btn btn-ghost"
          onClick={() => navigate("/dashboard/resume")}
        >
          Cancel
        </button>

        <button className="btn btn-primary" onClick={saveChanges}>
          ✓ Save Changes
        </button>
      </div>
    </>
  );
}

export default ResumeEditor;