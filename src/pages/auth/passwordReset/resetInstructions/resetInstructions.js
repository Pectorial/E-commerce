import React, { useMemo, useState } from "react";

import classes from "./resetInstructions.module.css";
import Navbar from "../../../../components/navbar/navbar";
import Input from "../../../../UI/input/input";
import googleIcon from "../../../../assets/images/search.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const ResetInstructions = () => {
  const navigate = useNavigate();
  const [ seachParams ] = useSearchParams();

  const redirectTLogin = () => {
    navigate({pathname: "/login"});
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.formBody}>
        <div className={classes.inputs}>
          <div>
          <h1>Check your email</h1>
          <p>
            We have sent password recovery instructions to <span style={{fontWeight: 600}}>"{seachParams.get("email")}"</span>
          </p>
          </div>
        </div>
        <div className={classes.action_section}>
          <button onClick={redirectTLogin} style={{cursor: "pointer"}}>Back to log in</button>
        </div>
        <div style={{ margin: "auto", textAlign: "center", lineHeight: "20px" }}>
            <p
              style={{ fontSize: "16px", color: "#535350", fontWeight: 400}}
            >
              {" "}
                Did you recieve the email? Check your spam folder, or
              <span
              style={{ fontSize: "14px", color: "#084777", fontWeight: 700, cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            > Try another email address</span>
            </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetInstructions;
