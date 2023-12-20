import { useContext, useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import ItemContext from "../../store/item-context";

const MealItemForm = ({meal}) =>{
    const context = useContext(ItemContext);
    const amountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const onSubmit = (e) =>{
        e.preventDefault();
        const value = Number(amountRef.current.value);
        if(!value || value < 1 || value > 5){
            setAmountIsValid(false);
            return;
        }
        
        setAmountIsValid(true);
        context.onSubmit({...meal, amount : value});
    };

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <Input ref={amountRef} label="Amount"/>
            <button type="submit">+Add</button>
            {!amountIsValid && <p>숫자만 입력하거나 1보다크고 5보다 작아야 합니다.</p>}
        </form>
    )
};

export default MealItemForm;