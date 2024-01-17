import React from "react";

const Input = (props) => {
  return (
    <div className="nega">
      <label for={props.id} className={props.labelClass}>
        {props.label} <br />
        <input
          className={"input1 " + props.class}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleInput}
          onKeyDown={props.handleKeyDown}
          id={props.id}
          required={props.required}
          minLength={"3"}
        />
        {props.label2}
      </label>
    </div>
  );
};

export default Input;
