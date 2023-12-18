import { useContext, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import ItemContext from "../../store/item-context";

const MealItemForm = ({meal}) =>{
    const context = useContext(ItemContext);
    const [amount, setAmount] = useState(1);
    const amountChange = (e) =>{
        setAmount(e.target.value);
    };
    
    const onSubmit = (e) =>{
        e.preventDefault();
        context.onSubmit(amount,meal);
    };

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <Input label="Amount" value={amount} onChange={amountChange}/>
            <button type="submit">+Add</button>
        </form>
    )
};

export default MealItemForm;