import React from "react";
import { candidate } from "../../data/candidate";
import SkillTag from "./SkillTag";

function ResumePreview() {
  return (
    <div className="resume-doc dashboard-resume-doc">

      <div className="resume-head">

        <div className="resume-name">
          {candidate.name}
        </div>

        <div className="resume-role">
          {candidate.title}
        </div>

        <div className="resume-contact">
          {candidate.email}
          &nbsp;·&nbsp;
          {candidate.phone}
        </div>

      </div>


      <div className="resume-section">

        <div className="resume-h">
          Professional Summary
        </div>

        <div className="resume-body">
          Backend software engineer with experience building
          scalable services in Java and Spring Boot, event-driven
          systems using Kafka, and containerized deployments
          with Docker.
        </div>

      </div>


      <div className="resume-section">

        <div className="resume-h">
          Core Skills
        </div>

        <div className="row wrap gap8">
          {candidate.skills.map((skill) => (
            <SkillTag key={skill}>
              {skill}
            </SkillTag>
          ))}
        </div>

      </div>


      <div className="resume-section">

        <div className="resume-h">
          Professional Experience
        </div>

        {candidate.experience.map((item) => (
          <div
            className="mt10"
            key={`${item.role}-${item.company}`}
          >

            <div className="resume-exp-role">
              {item.role} · {item.company}
            </div>

            <div className="resume-exp-meta">
              {item.period}
            </div>

            <ul className="resume-body resume-list">

              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  {bullet}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ResumePreview;