import classes from "./Home.module.css";
import Header from "../components/Header";
import EmployeesList from "../components/EmployeesList";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <div className={classes.container}>
      <Header />
      {loading ? <LoadingSpinner /> : <EmployeesList />}
    </div>
  );
};

export default Home;
