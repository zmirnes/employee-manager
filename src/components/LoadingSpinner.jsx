import React from "react";
import classes from "./LoadingSpinner.module.css";
import loadingSpinner from "../assets/svg/loadingSpinner.svg";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <img alt="Loading.." src={loadingSpinner} className={classes.spinner} />
    </div>
  );
};

export default LoadingSpinner;
