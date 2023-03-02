import React from "react";
import classes from "./AddEmployeeForm.module.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddEmployeeForm = () => {
  const ctx = useContext(GlobalContext);

  const name = useRef();
  const date = useRef();
  const position = useRef();
  const hourlyRate = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 10000000),
      name: name.current.value,
      startedWorking: new Date(date.current.value).toLocaleDateString(),
      position: position.current.value,
      hourlyRate: hourlyRate.current.value,
    };
    ctx.addEmployee(data);
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
