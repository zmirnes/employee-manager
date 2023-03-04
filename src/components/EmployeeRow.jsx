import classes from "./EmployeeRow.module.css";
import { Link } from "react-router-dom";
import editIcon from "../assets/svg/editIcon.svg";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const EmployeeRow = (props) => {
  const { removeEmployee, showMessageHandler } = useContext(GlobalContext);

  return (
    <div className={classes.employeeRow}>
      <span className={classes.employeeData}>{props.user.name}</span>
      <span className={`${classes.employeeData} ${classes.mobileHidden}`}>
        {props.user.startedWorking}
      </span>
      <span className={`${classes.employeeData} ${classes.mobileHidden}`}>
        {props.user.position}
      </span>
      <span className={`${classes.employeeData} ${classes.mobileHidden}`}>
        {props.user.hourlyRate} BAM
      </span>
      <div className={classes.manageEmployee}>
        <Link to={`/view/${props.user.id}`} className={classes.detailsBtn}>
          Detalji
        </Link>
        <Link to={`/edit/${props.user.id}`} className={classes.link}>
          <img src={editIcon} alt="Edit" className={classes.iconLinkEdit} />
        </Link>
        <Link
          to="/"
          className={classes.link}
          onClick={(e) => {
            e.preventDefault();
            removeEmployee(props.user.id);
            showMessageHandler(`${props.user.name} uspješno izbrisan!`);
          }}
        >
          <img
            src={deleteIcon}
            alt="Delete"
            className={classes.iconLinkDelete}
          />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeRow;
