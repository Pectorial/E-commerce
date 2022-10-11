import React, { useMemo, useState, useEffect, useRef } from "react";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from "./NewPassword.module.css";
import Navbar from "../../../../components/navbar/navbar";
import Input from "../../../../UI/input/input";
import googleIcon from "../../../../assets/images/search.png";
import { Link, useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const [tooglePassword, setTooglePassword] = useState("password");
  const [ modalState, setModalState ] = useState(null)
  const [checker, setChecker] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);

  const modalView = useRef()

  useEffect(() => {
    if (modalState) {
      setTimeout(() => {
        setModalState(null)
      }, 3000);
    }

    modalView.current?.scrollIntoView()
  }, [modalState])

  const [signupForm, setSignupForm] = useState({
    password: {
        elementType: "input",
        inputConfig: {
          placeholder: "Password",
          type: tooglePassword,
        },
        validation: {
          valid: false,
          required: true,
          min: 8,
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
  
  const formSubmitter = async () => {
    let newForm = {};
    for (const keys in signupForm) {
      if (keys === 'validForm') continue
      newForm[keys] = signupForm[keys].value;
    }
    // Send Login Request
    try {
      const response = await axios.post(
        `http://localhost:5050/auth/login`,
        JSON.stringify(newForm),
        { headers: { "Content-Type": "application/json"} }
      );
      setModalState({
        error: false,
        success: true,
        message: response.data.message
      })
      console.log(response.data)
    } catch (err) {
      setModalState({
        error: true,
        success: false,
        message: err.response.data
      })
    }
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
      {/* <div ref={modalView}></div>
      <ErrorModal show={modalState} error={modalState?.error} success={modalState?.success}>
        {modalState?.message}
      </ErrorModal> */}
      <button onClick={toast.warn("Easy if it works..")}>Click</button>
      <ToastContainer 
      autoClose={1000}
      rtl={false}
      theme="light"
      position="top-left" />
      <div className={classes.formbody}>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "100px",
            fontFamily: "PT Sans",
            // marginTop: showModal ? "0px" : "-50px",
          }}
        ></div>
        <div className={classes.inputs}>
          <h1>Set new password</h1>
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
            </div>
          ))}
        </div>
        <div className={classes.action_section}>
          <button onClick={formSubmitter} disabled={formIsValid} style={{ cursor: "pointer" }}>Sign in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPassword;
