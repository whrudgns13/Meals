import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import ItemContext from "../store/item-context";

const CartButton = () => {
    const context = useContext(ItemContext);
    const onOpenModal = () =>{
        context.modalHandler(true);
        // props.modalHandler(true);
    };

    return (
        <>
            <button onClick={onOpenModal} className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{context.itemCount}</span>
            </button>
        </>
    )
};

export default CartButton;