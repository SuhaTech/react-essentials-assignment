import React from "react";
import { Sparkles } from "lucide-react";

function Brand() {
  return (
    <div className="brand">
      <div className="brand-mark">
        <Sparkles size={17} strokeWidth={2.2} />
      </div>

      <span className="brand-name">
        Intelli<span>Resume</span>
      </span>
    </div>
  );
}

export default Brand;