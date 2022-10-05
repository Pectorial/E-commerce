import React, { useMemo, useState } from "react";

import classes from "./login.module.css";
import ErrorModal from "../../../UI/Modal/errorModal";
import Navbar from "../../../components/navbar/navbar";
import Input from "../../../UI/input/input";
import googleIcon from "../../../assets/images/search.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [tooglePassword, setTooglePassword] = useState("password");
  const [checker, setChecker] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);

  const [signupForm, setSignupForm] = useState({
    email: {
      elementType: "input",
      inputConfig: {
        placeholder: "Email Address",
        type: "email",
      },
      validation: {
        valid: false,
        required: true,
      },
      value: "",
      touched: false,
    },
    password: {
      elementType: "input",
      inputConfig: {
        placeholder: "Password",
        type: tooglePassword,
      },
      validation: {
        valid: false,
        required: true,
        min: 8
      },
      value: "",
      touched: false,
    },
    validForm: false,
  });
  
  const passwordToogler = (identifier) => {
    setTooglePassword(tooglePassword == "text" ? "password" : "text");
    const form = { ...signupForm };
    const identified = { ...form[identifier] };
    identified.inputConfig.type = tooglePassword;
    form[identifier] = identified;
    setSignupForm(form);
  };

  const googleLoginHandle = () => {};

  const redirectToSignup = () => {
    navigate({ pathname: "/signup" });
  };

  const checkInputValidity = (value, validationRules, identifier, formObj) => {
    let isValid = true;
    if (identifier === "email") {
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isValid = isValid && value.trim().match(emailFormat);
      isValid = isValid && value.trim() !== "";
    }

    if (validationRules.min || validationRules.max) {
      isValid = validationRules.max ? isValid && value.trim().length <= validationRules.max : isValid = true;
      isValid = isValid && value.trim().length >= validationRules.min;
      isValid = isValid && value.trim() !== "";
    }
    
    if (identifier === "confirmPassword") {
      isValid = isValid && value.trim() === formObj['password'].value;
    }
    
    if (!validationRules.required) return true;
    if (isValid) {
      return true;
    } else {
      return false;
    }
  };
  
  const inputChangedHandler = (event, identifier) => {
    let validForm = true;
    const newForm = { ...signupForm };
    const formConfigs = { ...newForm[identifier] };
    formConfigs.touched = true;
    formConfigs.value = event.target.value;
    formConfigs.validation.valid = checkInputValidity(
      formConfigs.value,
      formConfigs.validation,
      identifier,
      newForm
      );
      newForm[identifier] = formConfigs;
      setSignupForm(newForm);
      
      for (const keys in signupForm) {
        if (keys === "validForm") continue;
        validForm = validForm && signupForm[keys].validation.valid;
      }
    setFormIsValid(!validForm)
  };
  
  const formSubmitter = () => {
    let newForm = {};
    for (const keys in signupForm) {
      newForm[keys] = signupForm[keys].value;
    }
    console.log(newForm)
  }
  
    const formArranger = [];
    for (let eachCredential in signupForm) {
      if (eachCredential === "validForm") continue
      formArranger.push({
        key: eachCredential,
        elementConfig: signupForm[eachCredential],
      });
    }
  
  return (
    <React.Fragment>
      <Navbar />
      <ErrorModal success error show={showModal} />
      <div className={classes.formbody}>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "100px",
            fontFamily: "PT Sans",
            marginTop: showModal ? "0px" : "-50px",
          }}
        ></div>
        <div className={classes.inputs}>
          <h1>Sign in</h1>
          {formArranger.map((element) => (
            <div key={element.key}>
              <Input
                key={element.key}
                elementType={element.elementConfig.elementType}
                elementConfig={element.elementConfig.inputConfig}
                tooglePassword={() => passwordToogler(element.key)}
                passwordMode={tooglePassword}
                type={element.key}
                value={element.elementConfig.value}
                changed={(event) => inputChangedHandler(event, element.key)}
                valid={element.elementConfig.validation.valid}
                touched={element.elementConfig.touched}
              />
              {element.key == "password" ? (
                <Link to="/forgot-password">
                  <p
                    style={{
                      position: "relative",
                      bottom: "0.5em",
                      color: "#12128D",
                      fontWeight: "400",
                    }}
                  >
                    Forgot Password?
                  </p>{" "}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
        <div className={classes.action_section}>
          <button onClick={formSubmitter} disabled={formIsValid} style={{ cursor: "pointer" }}>Sign in</button>
          <p style={{ color: "#535350", fontSize: "18px", fontWeight: "400" }}>
            OR
          </p>
          <button
            style={{ cursor: "pointer" }}
            className={classes.continue}
            onClick={googleLoginHandle}
          >
            <img src={googleIcon} height={25} width={25} /> Sign in with Google
          </button>
          <div
            style={{
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer",
            }}
            onClick={() => setChecker(!checker)}
          >
            <input
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
              type="checkbox"
              checked={checker}
            />
            <p style={{ fontWeight: "400" }}>Keep me signed in</p>
          </div>
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", padding: "8px" }}>
            Don't have an account?
            <span
              style={{
                fontSize: "16px",
                color: "#084777",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={redirectToSignup}
            >
              {" "}
              Create one
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
