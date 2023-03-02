import React, { Fragment } from "react";
import Header from "../components/Header";
import AddEmployeeForm from "../components/AddEmployeeForm";
import classes from "./AddEmployee.module.css";

const AddEmployee = (props) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.formContainer}>
        <AddEmployeeForm />
      </div>
    </Fragment>
  );
};

export default AddEmployee;
