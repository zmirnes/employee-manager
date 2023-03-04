import { onValue, ref, remove, set } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { useList } from "react-firebase-hooks/database";

import db from "./Firebase";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, loading, error] = useList(ref(db, "employees"));
  const [employees, setEmployees] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  console.log(data, error, loading);

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

  const editEmployee = (employee) => {
    set(ref(db, `employees/${employee.id}`), employee);
  };

  const showMessageHandler = (message) => {
    setShowMessage(true);
    setMessageText(message);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <GlobalContext.Provider
      value={{
        employees: employees,
        addEmployee,
        removeEmployee,
        editEmployee,
        loading,
        showMessageHandler,
        showMessage,
        messageText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
