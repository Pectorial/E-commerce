import React, { useMemo, useState } from "react";

import classes from "./login.module.css";
import Navbar from "../../../components/navbar/navbar";
import Input from "../../../UI/input/input";
import googleIcon from "../../../assets/images/search.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [tooglePassword, setTooglePassword] = useState("password");
  const [ checker,  setChecker ] = useState(true)

  const [signupForm, setSignupForm] = useState({
    email: {
      elementType: "input",
      inputConfig: {
        placeholder: "Email Address",
        type: "email",
      },
    },
    password: {
      elementType: "input",
      inputConfig: {
        placeholder: "Password",
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

  const googleLoginHandle = () => {

  }

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
            <div key={element.key}>
              <Input
                key={element.key}
                elementType={element.elementConfig.elementType}
                elementConfig={element.elementConfig.inputConfig}
                tooglePassword={() => passwordToogler(element.key)}
                passwordMode={tooglePassword}
                type={element.key}
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
          <button>Sign in</button>
          <p style={{ color: "#535350", fontSize: "18px", fontWeight: "400" }}>
            OR
          </p>
          <button className={classes.continue} onClick={googleLoginHandle}>
            <img src={googleIcon} height={25} width={25} /> Sign in with Google
          </button>
          <div
            style={{
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            onClick={() => setChecker(!checker)}
          >
            <input
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
              type="checkbox" checked={checker}
            />
            <p style={{ fontWeight: "400" }}>Keep me signed in</p>
          </div>
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", padding: "8px" }}>
            Don't have an account?
            <span
              style={{ fontSize: "16px", color: "#084777", fontWeight: 500 }}
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
