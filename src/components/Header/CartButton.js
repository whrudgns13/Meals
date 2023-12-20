import { useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import ItemContext from "../store/item-context";

const CartButton = (props) => {
    const context = useContext(ItemContext);
    const onOpenModal = () =>{
        props.onOpen(true);
        // props.modalHandler(true);
    };

    const itemLength = context.mealItems.reduce((acc,cur)=>acc+cur.amount,0);

    return (
        <>
            <button onClick={onOpenModal} className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{itemLength}</span>
            </button>
        </>
    )
};

export default CartButton;