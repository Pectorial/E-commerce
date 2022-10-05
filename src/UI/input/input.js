import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  let inputElement;
  let inputStyle = [classes.input];
  let passwordInputStyle = [classes.password_field];

  if (props.touched && !(props.valid)) {
    passwordInputStyle = [classes.password_field, classes.invalidInput]
    inputStyle = [classes.input, classes.invalidInput]
  }

  switch (props.elementType) {
    case "input":
      if (props.type === "confirmPassword" || props.type === "password") {
        return (inputElement = (
          <div className={classes.passwordTag}>
            <label>{props.elementConfig.placeholder}</label>
            <div className={passwordInputStyle.join(" ")}>
              <input
                className={classes.input}
                value={props.value}
                type={props.elementConfig.type}
                placeholder={props.elementConfig.placeholder}
                onChange={props.changed}
              />
              <i
                onClick={props.tooglePassword}
                class={props.passwordMode == "text" ? "fa fa-eye" : "fa fa-eye-slash"}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        ));
      }
      inputElement = (
        <div className={classes.inputTag}>
          <label>{props.elementConfig.placeholder}</label>
          <input
            className={inputStyle.join(" ")}
            value={props.value}
            type={props.elementConfig.type}
            placeholder={props.elementConfig.placeholder}
            onChange={props.changed}
          />
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          value={props.value}
          placeholder={props.elementConfig.placeholder}
        />
      );
      break;
    case "select":
      inputElement = (
        <select value={props.value}>
          {props.elementConfig.options.map((option) => (
            <option value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = null;
  }

  return inputElement;
};

export default Input;
