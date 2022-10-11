import React, { useMemo, useState } from "react";

import classes from "./passwordReset.module.css";
import Navbar from "../../../components/navbar/navbar";
import Input from "../../../UI/input/input";
import googleIcon from "../../../assets/images/search.png";
import { Link, useNavigate, createSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [signupForm, setSignupForm] = useState({
    email: {
      elementType: "input",
      inputConfig: {
        placeholder: "Email Address",
        type: "email",
      }
    },
  });

  const formArranger = [];
  for (let eachCredential in signupForm) {
    formArranger.push({
      key: eachCredential,
      elementConfig: signupForm[eachCredential],
    });
  }

  const sendInstructions = () => {
    navigate({pathname: '/password-reset-instruction', search: `?${createSearchParams({email})}`})
  }

  const emailChangedHandler = (e) => {
    let isValid = true;
    let value = e.target.value;
    
    // Proper Validation takes place at the backend abeg...
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isValid = isValid && value.trim().match(emailFormat);
      isValid = isValid && value.trim() !== "";
      setEmail(value)
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.formbody}>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "100px",
            fontFamily: "PT Sans",
          }}
        ></div>
        <div className={classes.inputs}>
          <div>
          <h1>Forgot Password?</h1>
          <p>
            Please enter the email associated with your Atarodo account and we'll send an email with instructions to reset your password
          </p>
          </div>
          {formArranger.map((element) => (
            <div key={element.key} style={{marginBottom: "20px"}}>
              <Input
                key={element.key}
                elementType={element.elementConfig.elementType}
                elementConfig={element.elementConfig.inputConfig}
                type={element.key}
                changed={emailChangedHandler}
              />
            </div>
          ))}
        </div>
        <div className={classes.action_section}>
          <button onClick={sendInstructions} style={{cursor: "pointer"}}>Send instructions</button>
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "14px", color: "#000000", fontWeight: "700" }}>
            Has your email or phone number changed?
            </h2>
            <p
              style={{ fontSize: "14px"}}
            >
              {" "}
              If you no more use the email address associated with your Atarodo account, you may contact 
              <span
              style={{ fontSize: "14px", color: "#084777", fontWeight: 700, cursor: "pointer" }}
            > Customer Service </span> for help restoring access to your account.
            </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
