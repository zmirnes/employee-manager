import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddEmployee from "./Pages/AddEmployee";
import EditEmployee from "./Pages/EditEmployee";
import Message from "./components/Message";
import ViewEmployee from "./Pages/ViewEmployee";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const { showMessage } = useContext(GlobalContext);

  return (
    <Fragment>
      {showMessage && <Message />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/view/:id" element={<ViewEmployee />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Fragment>
  );
};

export default App;
