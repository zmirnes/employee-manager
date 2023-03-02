import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const showButton = location.pathname === "/";

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.logo}>
        EmployeeManager
      </Link>
      {showButton ? (
        <Link to="/add" className={classes.addBtn}>
          Dodaj zaposlenog
        </Link>
      ) : (
        <Link to="/" className={classes.addBtn}>
          Početna
        </Link>
      )}
    </div>
  );
};

export default Header;
