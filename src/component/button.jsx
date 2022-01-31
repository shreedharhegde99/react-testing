import React from "react";
import style  from "./button.module.css";

const Button = ({ label,onClick }) => {
	return <div className={style.button} data-testid='button' onClick={onClick}>{label}</div>;
};

export {Button}