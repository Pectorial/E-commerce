import React, { useMemo, useState } from "react";

import classes from "./signup.module.css";
import Navbar from "../../../components/navbar/navbar";
import Input from "../../../UI/input/input";
import googleIcon from '../../../assets/images/search.png';

const Signup = () => {
  const [tooglePassword, setTooglePassword] = useState("password");

  const [signupForm, setSignupForm] = useState({
    email: {
      elementType: "input",
      inputConfig: {
        placeholder: "Email Address",
        type: "email",
      },
    },
    mobile: {
      elementType: "input",
      inputConfig: {
        placeholder: "Phone Number",
        type: "Number",
      },
    },
    password: {
      elementType: "input",
      inputConfig: {
        placeholder: "Password",
        type: tooglePassword,
      },
    },
    confirmPassword: {
      elementType: "input",
      inputConfig: {
        placeholder: "Confirm Password",
        type: tooglePassword,
      },
    },
  });

  const formArranger = [];
  for (let eachCredential in signupForm) {
    formArranger.push({
      key: eachCredential,
      elementConfig: signupForm[eachCredential],
    });
  }

  const passwordToogler = (identifier) => {
    setTooglePassword(tooglePassword == "text" ? "password" : "text");
    const form = { ...signupForm };
    const identified = { ...form[identifier] };
    identified.inputConfig.type = tooglePassword;
    form[identifier] = identified;
    setSignupForm(form);
  };

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className={classes.formbody}>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "100px",
            fontFamily: "PT Sans",
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
            />
          ))}
        </div>
        <div>
          <p style={{fontSize: "14px"}}>
            By creating a new account, you agree to Atarodo's{" "}
            <span style={{fontSize: "16px", color: "#084777", fontWeight: 500}}>Terms of Service</span> and <span style={{fontSize: "16px", color: "#084777", fontWeight: 500}}>Privacy Policy</span>
          </p>
        </div>
        <div className={classes.action_section}>
        <button>Create account</button>
        <p style={{color: "#535350", fontSize: "18px", fontWeight: "400"}}>OR</p>
        <button className={classes.continue}><img src={googleIcon} height={25} width={25} /> Continue with Google</button>
        <div>
          <p style={{fontSize: "14px", padding: "8px"}}>
            Already have an account?
            <span style={{fontSize: "16px", color: "#084777", fontWeight: 500}}> Sign in</span>
          </p>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
