import { onValue, ref, remove, set } from "firebase/database";
import { createContext, useEffect, useState } from "react";

import db from "./Firebase";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    onValue(ref(db, "employees"), (snapshot) => {
      if (snapshot.val() === null) {
        setEmployees(() => []);
      } else {
        setEmployees(() => Object.values(snapshot.val()));
      }
    });
  }, []);

  const addEmployee = (employee) => {
    set(ref(db, `employees/${employee.id}`), employee);
  };

  const removeEmployee = (id) => {
    remove(ref(db, `employees/${id}`));
  };

  return (
    <GlobalContext.Provider
      value={{ employees: employees, addEmployee, removeEmployee }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
