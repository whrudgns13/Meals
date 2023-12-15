import { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) =>{
    const [amount, setAmount] = useState(1);
    const amountChange = (e) =>{
        setAmount(e.target.value);
    };
    
    const onSubmit = (e) =>{
        e.preventDefault();
        props.submit(amount);
    };

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <Input label="Amount" value={amount} onChange={amountChange}/>
            <button type="submit">+Add</button>
        </form>
    )
};

export default MealItemForm;