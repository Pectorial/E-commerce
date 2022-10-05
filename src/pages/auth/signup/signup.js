import React, { useMemo, useState } from "react";

import classes from "./signup.module.css";
import Navbar from "../../../components/navbar/navbar";
import Input from "../../../UI/input/input";
import googleIcon from "../../../assets/images/search.png";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../../../UI/Modal/errorModal";

const Signup = () => {
  const navigate = useNavigate();
  const [tooglePassword, setTooglePassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState(null);
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
    mobile: {
      elementType: "input",
      inputConfig: {
        placeholder: "Phone Number",
        type: "Number",
      },
      validation: {
        valid: false,
        required: true,
        min: 7,
        max: 11,
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
    confirmPassword: {
      elementType: "input",
      inputConfig: {
        placeholder: "Confirm Password",
        type: tooglePassword,
      },
      validation: {
        valid: false,
        required: true,
      },
      value: "",
      touched: false,
    },
    validForm: false,
  });
  
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
  
  const passwordToogler = (identifier) => {
    setTooglePassword(tooglePassword == "text" ? "password" : "text");
    const form = { ...signupForm };
    const identified = { ...form[identifier] };
    identified.inputConfig.type = tooglePassword;
    form[identifier] = identified;
    setSignupForm(form);
  };

  const formSubmitter = () => {
    let newForm = {};
    for (const keys in signupForm) {
      newForm[keys] = signupForm[keys].value;
    }
    console.log(newForm)
  }
  
  const redirectToLogin = () => {
    navigate({ pathname: "/login" });
  };
  
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
          <h1>Create Account</h1>
          {formArranger.map((element) => (
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
          ))}
        </div>
        <div>
          <p style={{ fontSize: "14px" }}>
            By creating a new account, you agree to Atarodo's{" "}
            <span
              style={{ fontSize: "16px", color: "#084777", fontWeight: 500 }}
            >
              Terms of Service
            </span>{" "}
            and{" "}
            <span
              style={{ fontSize: "16px", color: "#084777", fontWeight: 500 }}
            >
              Privacy Policy
            </span>
          </p>
        </div>
        <div className={classes.action_section}>
          <button disabled={formIsValid} onClick={formSubmitter}>Create account</button>
          <p style={{ color: "#535350", fontSize: "18px", fontWeight: "400" }}>
            OR
          </p>
          <button className={classes.continue}>
            <img src={googleIcon} height={25} width={25} /> Continue with Google
          </button>
          <div>
            <p style={{ fontSize: "14px", padding: "8px" }}>
              Already have an account?
              <span
                style={{
                  fontSize: "16px",
                  color: "#084777",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={redirectToLogin}
              >
                {" "}
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
