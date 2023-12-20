import React,{useReducer, useState} from "react";

const ItemContext = React.createContext({
    itemCount : 0,
    mealItems : [],
    onSubmit : (meal)=>{},
    removeCart : (meal)=>{}
});

const defaultCartState = {
    mealItems : [],
    totalAmount : 0    
};

export const ItemContextProvider = (props) =>{
  
    const [cartState, cartAction] = useReducer((state, action)=>{
        const updateItems = state.mealItems;
        const meal = action.meal;
        const index = updateItems.findIndex(mealItem => mealItem.id===meal.id);

        if(action.type==="ADD"){
            const total = state.totalAmount+(meal.price*meal.amount);

            if(index>-1){
                updateItems[index].amount = updateItems[index].amount + meal.amount; 
                
                return {
                    mealItems : [...updateItems],
                    totalAmount : total
                };
            }
            
            return {
                mealItems : [...updateItems, action.meal],
                totalAmount : total
            };
        }

        if(action.type==="REMOVE"){
            if(index>-1){
                updateItems[index].amount = updateItems[index].amount-1;
                
                if(!updateItems[index].amount){
                    updateItems.splice(index,1);
                }
                
                const total = state.totalAmount-meal.price;

                return {
                    mealItems : [...updateItems],
                    totalAmount : total
                }
            }
        }

        return defaultCartState;
    },defaultCartState);

    const addCart = (meal) =>{
        cartAction({
            type : "ADD",
            meal
        });

    };

    const removeCart = (meal) =>{
        cartAction({type : "REMOVE", meal});
    };

    const cartContext = {
        totalAmount : cartState.totalAmount,
        mealItems : cartState.mealItems,
        onSubmit : addCart,
        removeCart
    }

    return (
        <ItemContext.Provider 
            value= {cartContext}
        >
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContext;