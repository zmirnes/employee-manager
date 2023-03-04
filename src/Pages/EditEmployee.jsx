import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import db from "../context/Firebase";
import EditEmployeeForm from "../components/EditEmployeeForm";
import classes from "./EditEmployee.module.css";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [noUser, setNoUser] = useState(false);

  useEffect(() => {
    onValue(ref(db, `employees/${id}`), (snapshot) => {
      if (snapshot.val() === null) {
        setNoUser(true);
      } else {
        setEmployee(() => {
          return snapshot.val();
        });
        setIsLoading(false);
      }
    });
  }, [id]);

  return isLoading ? (
    <div>
      <Header />
      {!noUser && <LoadingSpinner />}
      {noUser && <div className={classes.userNotFound}> User not found! </div>}
    </div>
  ) : (
    <Fragment>
      <Header />
      <div className={classes.formContainer}>
        <EditEmployeeForm employee={employee} />
      </div>
    </Fragment>
  );
};

export default EditEmployee;
