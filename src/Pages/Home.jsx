import classes from "./Home.module.css";
import Header from "../components/Header";
import EmployeesList from "../components/EmployeesList";

const Home = () => {
  return (
    <div className={classes.container}>
      <Header />
      <EmployeesList />
    </div>
  );
};

export default Home;
