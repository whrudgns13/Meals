import { useContext } from "react";
import ItemContext from "../store/item-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = () =>{
    const context= useContext(ItemContext);
    const cartItem = (
        <ul className={classes['cart-items']}>
        {context.mealItems.map(mealItem=><li>{mealItem.name}</li>)}
        </ul>
    );

    const onModelClose = () =>{
        context.modalHandler(false);
    }

    return (
        <Modal>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span></span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onModelClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;