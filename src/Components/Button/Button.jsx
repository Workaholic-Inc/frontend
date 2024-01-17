import React from "react";
import "./Button.css";

const ButtonC = (props) => {
  return (
    <div className="btn">
      <button onClick={props.handleSubmit}>{props.label}</button>
    </div>
  );
};

export default ButtonC;
