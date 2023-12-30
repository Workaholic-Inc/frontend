import React from "react";
const Checkbox = (props) => {
  return (
    <div className={"checkbox " + props.class}>
      <input
        id={props.id}
        type="checkbox"
        className="chb-ipt"
        onChange={props.handleCheck}
        checked={props.checked}
        // onClick={props.handleCheck}
      />
      <label>
        {props.label} <span className="cb-date">{props.dateLabel}</span>
      </label>
    </div>
  );
};

export default Checkbox;
