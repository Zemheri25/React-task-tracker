import React from "react";

function Button({color, text, toggleShow}) {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={toggleShow}
        
        className="btn"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
