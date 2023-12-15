import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
    return (
        <>
            <MealsSummary/> 
            <AvailableMeals submit={props.submit}/>   
        </>
    )
}

export default Meals;