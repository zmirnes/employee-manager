import React from "react";
import classes from "./Message.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

const Message = () => {
  const { messageText } = useContext(GlobalContext);

  return (
    <motion.div
      initial={{ y: "100vh", x: "-50%" }}
      animate={{ y: 0 }}
      className={classes.message}
    >
      <span>{messageText}</span>
      <div className={classes.line}></div>
    </motion.div>
  );
};

export default Message;
