import EmployeeRow from "./EmployeeRow";
import classes from "./EmployeesList.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const EmployeesList = () => {
  const { users } = useContext(GlobalContext);
  return (
    <div className={classes.employeesList}>
      <div className={classes.employeeListHeader}>
        <span>Ime i prezime</span>
        <span>Radi od</span>
        <span>Pozicija</span>
        <span>Satnica</span>
        <span>Akcije</span>
      </div>
      {users.map((user) => (
        <EmployeeRow key={user.id} user={user} />
      ))}
    </div>
  );
};

export default EmployeesList;
