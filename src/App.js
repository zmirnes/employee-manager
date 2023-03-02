import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddEmployee from "./Pages/AddEmployee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEmployee />} />
    </Routes>
  );
};

export default App;
