import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) =>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} ref={ref} defaultValue="1"/>
        </div>
    )
});

export default Input;