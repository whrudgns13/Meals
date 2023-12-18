import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import React from "react";

const Backdrop = () => {
    return <div className={classes.backdrop}/>
};
const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.querySelector("#overlays");

const Modal = (props) =>{    
    return (
        <>
            { createPortal(<Backdrop/>,portalElement) }
            { createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement) }    
        </>
    )
};

export default Modal;