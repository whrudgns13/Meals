import classes from "./CartItem.module.css";
import ItemContext from "../store/item-context";
import { useContext } from "react";

const CartItem = (props) =>{
    const meal = {...props.meal};
    const context = useContext(ItemContext);

    const add = () =>{
        meal.amount = 1;
        context.onSubmit(meal);
    };

    const remove = () =>{
        context.removeCart(meal);
    };

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{meal.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{meal.price}</span>
                    <span className={classes.amount}>x{meal.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </div>
        </li>
    );
}

export default CartItem;