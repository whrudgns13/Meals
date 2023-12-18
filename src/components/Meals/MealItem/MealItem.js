import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({meal}) => {
    const price = `$${meal.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={classes.description}>{meal.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm meal={meal}/>
            </div>
        </li>
    )
}

export default MealItem;