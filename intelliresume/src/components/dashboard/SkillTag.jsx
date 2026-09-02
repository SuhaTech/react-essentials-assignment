import React from "react";

function SkillTag({ children, plain = false, gap = false }) {
  return (
    <span className={`skill-tag ${plain ? "plain" : ""} ${gap ? "gap" : ""}`}>
      {children}
    </span>
  );
}

export default SkillTag;