import EmployeeRow from "./EmployeeRow";
import classes from "./EmployeesList.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const EmployeesList = () => {
  const { employees } = useContext(GlobalContext);
  const numberOfEmployees = employees.length;
  return numberOfEmployees > 0 ? (
    <div className={classes.employeesList}>
      <div className={classes.employeeListHeader}>
        <span>Ime i prezime</span>
        <span className={classes.mobileHidden}>Radi od</span>
        <span className={classes.mobileHidden}>Pozicija</span>
        <span className={classes.mobileHidden}>Satnica</span>
        <span>Akcije</span>
      </div>
      {employees.map((employee) => (
        <EmployeeRow key={employee.id} user={employee} />
      ))}
    </div>
  ) : (
    <div className={classes.message}>
      Trenutno nema zaposlenika u vašoj kompaniji.{" "}
    </div>
  );
};

export default EmployeesList;
