import EmployeeRow from "./EmployeeRow";
import classes from "./EmployeesList.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const EmployeesList = () => {
  const { employees } = useContext(GlobalContext);
  return (
    <div className={classes.employeesList}>
      <div className={classes.employeeListHeader}>
        <span>Ime i prezime</span>
        <span>Radi od</span>
        <span>Pozicija</span>
        <span>Satnica</span>
        <span>Akcije</span>
      </div>
      {employees.map((employee) => (
        <EmployeeRow key={employee.id} user={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
