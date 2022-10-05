import React from "react";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  let errorModalClasses = [classes.modalBody];
  if (props.error) {
    errorModalClasses = [classes.modalBody, classes.failStyle];
  }
  if (props.success) {
    errorModalClasses = [classes.modalBody, classes.successStyle];
  }
  return (
    <main
      style={{ textAlign: "center", color: props.success ? "green" : "red", transform: props.show ? "translateY(0)" : "translateY(-50vh)" }}
      className={errorModalClasses.join(" ")}
    >
      {"props.children"}
    </main>
  );
};

export default ErrorModal;
