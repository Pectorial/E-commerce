import React, { useMemo, useState } from "react";

import classes from "./SuccessfullPassReset.module.css";
import Navbar from "../../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";

const SuccessfullPassReset = () => {
  const navigate = useNavigate();

  const redirectTLogin = () => {
    navigate({pathname: "/login"});
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.formBody}>
        <div className={classes.inputs}>
          <div>
          <h1>Password reset</h1>
          <p>
            Your password has been successfully reset
          </p>
          </div>
        </div>
        <div className={classes.action_section}>
          <button style={{cursor: "pointer"}}>Back to log in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessfullPassReset;
