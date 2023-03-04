import React, { Fragment } from "react";
import classes from "./ViewEmployee.module.css";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams("id");

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.employeeCard}>
          <span className={classes.cardTitle}>Detalji</span>
          <div className={classes.employeeDetail}>
            <span className={classes.title}>Ime i prezime:</span>
            <span className={classes.value}>Mirnes Zahirović</span>
          </div>
          <div className={classes.employeeDetail}>
            <span className={classes.title}>Radi od:</span>
            <span className={classes.value}>08/01/2018</span>
          </div>
          <div className={classes.employeeDetail}>
            <span className={classes.title}>Pozicija:</span>
            <span className={classes.value}>CNC Operater</span>
          </div>
          <div className={classes.employeeDetail}>
            <span className={classes.title}>Satnica:</span>
            <span className={classes.value}>6 KM</span>
          </div>
          <div className={classes.actions}>
            <Link to={`/edit/${id}`} className={classes.editBtn}>
              Uredi
            </Link>
            <Link to={"/"} className={classes.closeBtn}>
              Nazad
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewEmployee;
