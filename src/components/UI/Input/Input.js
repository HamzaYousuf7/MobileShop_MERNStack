import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = ["form-control"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className="form-group">
      <div className="col-sm-10">
        {inputElement}

        {props.elementType === "radio" ? <span> {props.value}</span> : null}

        {props.elementType === "checkbox" ? (
          <span> I agree to your website.</span>
        ) : null}

        {props.invalidMessage.length > 0 ? (
          <div className="alert alert-danger" style={{ marginTop: "5px" }}>
            <strong>WARNING!</strong> {props.invalidMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default input;
