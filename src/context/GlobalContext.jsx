import { createContext, useReducer } from "react";
import ReducerApp from "./ReducerApp";

// Ovaj initialStorage sluzi samo za izgradnju aplikacije dok se ne napravi funkcija kreiranja korisnika

// const initialStorage = {
//   users: [
//     {
//       id: 1,
//       name: "Mirnes Zahirović",
//       position: "CNC Operater",
//       hourlyRate: 10,
//       startedWorking: "08.01.2018",
//     },
//   ],
// };

// Postavljanje korisnika u localStorage
// localStorage.setItem("1", JSON.stringify(initialStorage));

// Povlacenje korisnika iz localStorage

const initialState = JSON.parse(localStorage.getItem("1"));

// Kreiranje globalnog contexta

export const GlobalContext = createContext(initialState);

/* Kreiranje providera u kojem se nalazi reducer funkcija koja nam sluzi 
za pozivanje svih funkcija unutar aplikacije (kreiranje korisnika, uređivanje, brisanje)*/

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerApp, initialState);

  const addEmployee = (employee) => {
    dispatch({ type: "ADD_EMPLOYEE", payload: employee });
  };

  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users ? state.users : "No entries",
        addEmployee: addEmployee,
        removeEmployee: removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
