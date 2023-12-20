import { useContext, useState } from "react";
import ItemContext from "../store/item-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) =>{
    const context= useContext(ItemContext);
    const cartItem = (
        <ul className={classes['cart-items']}>
        {context.mealItems.map(mealItem=><CartItem meal={mealItem}></CartItem>)}
        </ul>
    );

    const onClose = ()=> props.modalHandler(false);
    
    return (
        <Modal onClose={onClose}>
           {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{context.totalAmount.toFixed(2)}</span>                
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;