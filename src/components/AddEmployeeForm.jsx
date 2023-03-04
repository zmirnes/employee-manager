import React from "react";
import classes from "./AddEmployeeForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { uid } from "uid";

const AddEmployeeForm = () => {
  const name = useRef();
  const date = useRef();
  const position = useRef();
  const hourlyRate = useRef();

  const navigate = useNavigate();

  const { addEmployee, showMessageHandler } = useContext(GlobalContext);

  const checkFormValidity = (employee) => {
    if (
      employee.name.split(" ").length < 2 ||
      employee.startedWorking === "Invalid Date" ||
      employee.position.length < 3 ||
      employee.hourlyRate.length < 1
    ) {
      showMessageHandler("Neka od polja nisu dobro popunjena!");
    } else {
      addEmployee(employee);
      navigate("/");
      showMessageHandler("Zaposleni uspješno dodan!");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkFormValidity({
      id: uid(),
      name: name.current.value,
      startedWorking: new Date(date.current.value).toLocaleDateString(),
      position: position.current.value,
      hourlyRate: hourlyRate.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <span className={classes.formTitle}>Dodaj zaposlenog</span>
      <label htmlFor="name">Ime i prezime:</label>
      <input type="text" placeholder="Ime i prezime" id="name" ref={name} />
      <label htmlFor="date">Radi od:</label>
      <input type="date" placeholder="Odaberi datum" id="date" ref={date} />
      <label htmlFor="position">Pozicija:</label>
      <input
        type="text"
        placeholder="Odaberi poziciju"
        id="pozicija"
        ref={position}
      />
      <label htmlFor="satnica">Satnica:</label>
      <input
        type="number"
        placeholder="Unesi Satnicu"
        id="satnica"
        ref={hourlyRate}
        step="0.01"
      />
      <div className={classes.actions}>
        <button className={classes.addBtn}>Dodaj zaposlenog</button>
        <Link to="/" className={classes.discardChanges}>
          Odustani
        </Link>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
