import React from "react";

const ButtonC = (props) => {
  return (
    <div>
      <button onClick={props.handleSubmit}>{props.label}</button>
    </div>
  );
};

export default ButtonC;
