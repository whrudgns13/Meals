import CartButton from "./CartButton";
import classes from "./Header.module.css";
import meals from "../../Image/meals.jpg";
const Header = (props) => {
    return(
        <>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <CartButton itemCount = {props.itemCount}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals}></img>
            </div>
        </>
    )
}

export default Header;