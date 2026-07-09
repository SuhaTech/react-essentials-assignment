import React from "react";
import SkillBadge from "./SkillBadge";

function Skills({ skills }) {
  return (
    <div className="skills">

      {skills.map((skill, index) => (
        <SkillBadge
          key={index}
          skill={skill}
        />
      ))}

    </div>
  );
}

export default Skills;