import React, { Fragment, useEffect, useState } from "react";
import classes from "./ViewEmployee.module.css";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import db from "../context/Firebase";
import { ref, onValue } from "firebase/database";
import { useList } from "react-firebase-hooks/database";

const ViewEmployee = () => {
  const { id } = useParams("id");
  const [employee, setEmployee] = useState();
  const [noUser, setNoUser] = useState(false);
  const [, loading] = useList(ref(db, "employees"));

  useEffect(() => {
    onValue(ref(db, `employees/${id}`), (snapshot) => {
      if (snapshot.val() === null && !loading) {
        setNoUser(true);
      } else {
        setEmployee(() => {
          return snapshot.val();
        });
      }
    });
  }, [id, loading]);

  return (
    <Fragment>
      <Header />
      {!loading && !noUser && (
        <div className={classes.container}>
          <div className={classes.employeeCard}>
            <span className={classes.cardTitle}>Detalji</span>
            <div className={classes.employeeDetail}>
              <span className={classes.title}>Ime i prezime:</span>
              <span className={classes.value}>{employee.name}</span>
            </div>
            <div className={classes.employeeDetail}>
              <span className={classes.title}>Radi od:</span>
              <span className={classes.value}>{employee.startedWorking}</span>
            </div>
            <div className={classes.employeeDetail}>
              <span className={classes.title}>Pozicija:</span>
              <span className={classes.value}>{employee.position}</span>
            </div>
            <div className={classes.employeeDetail}>
              <span className={classes.title}>Satnica:</span>
              <span className={classes.value}>{employee.hourlyRate} KM</span>
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
      )}
      {!loading && noUser && (
        <div className={classes.message}>No user found!</div>
      )}
    </Fragment>
  );
};

export default ViewEmployee;
