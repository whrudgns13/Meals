import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm 
                    submit={props.submit} 
                    name={props.name} 
                    desc={props.desc} 
                    price={props.price} />
            </div>
        </li>
    )
}

export default MealItem;