import React from "react";
import classes from "./EditEmployeeForm.module.css";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const EditEmployeeForm = (props) => {
  const { editEmployee, showMessageHandler } = useContext(GlobalContext);
  const navigate = useNavigate();

  const name = useRef();
  const date = useRef();
  const position = useRef();
  const hourlyRate = useRef();

  const checkFormValidity = (employee) => {
    if (
      employee.name.split(" ").length < 2 ||
      employee.startedWorking === "Invalid date" ||
      employee.position.length < 3 ||
      employee.hourlyRate.length < 1
    ) {
      showMessageHandler("Neka od polja nisu dobro popunjena!");
    } else {
      editEmployee(employee);
      showMessageHandler("Zaposlenik uspješno uređen!");
      navigate("/");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const employee = {
      id: props.employee.id,
      name: name.current.value,
      startedWorking: new Date(date.current.value).toLocaleDateString(),
      position: position.current.value,
      hourlyRate: hourlyRate.current.value,
    };

    checkFormValidity(employee);
  };

  const formatDate = (date) => {
    const format = date.split("/").reverse().join("-");

    const newDate = new Date(format);

    return newDate;
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <span className={classes.formTitle}>
        Uredi zaposlenog: <br></br> <br></br> {props.employee.name}
      </span>
      <label htmlFor="name">Ime i prezime:</label>
      <input
        type="text"
        placeholder="Ime i prezime"
        id="name"
        ref={name}
        defaultValue={props.employee.name}
      />
      <label htmlFor="date">Radi od:</label>
      <input
        type="date"
        placeholder="Odaberi datum"
        id="date"
        ref={date}
        defaultValue={new Date(formatDate(props.employee.startedWorking))
          .toISOString()
          .slice(0, 10)}
      />
      <label
        htmlFor="position
      "
      >
        Pozicija:
      </label>
      <input
        type="text"
        placeholder="Odaberi poziciju"
        id="pozicija"
        ref={position}
        defaultValue={props.employee.position}
      />
      <label htmlFor="satnica">Satnica:</label>
      <input
        type="number"
        placeholder="Unesi Satnicu"
        id="satnica"
        ref={hourlyRate}
        defaultValue={props.employee.hourlyRate}
        step="0.01"
      />
      <div className={classes.actions}>
        <button className={classes.addBtn}>Uredi zaposlenog</button>
        <Link onClick={goBack} className={classes.discardChanges}>
          Odustani
        </Link>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
