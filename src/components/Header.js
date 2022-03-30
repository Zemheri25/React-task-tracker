import React from "react";
import Button from "./Button";
function Header({ title,toggleShow,showbar }) {
 

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        toggleShow = {toggleShow}
        color={showbar ? "red" : "purple"}
        text={showbar ? "Close Add Tas Bar" : "Show Add Task Bar"}
      />
    </div>
  );
}

export default Header;
