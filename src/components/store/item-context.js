import React,{useState} from "react";

const ItemContext = React.createContext({
    itemCount : 0,
    mealItems : [],
    isModalOpen : false,
    modalHandler : (isOpen) =>{},
    onSubmit : ()=>{}
});

export const ItemContextProvider = (props) =>{
    const [itemCount, setItemCount] = useState(0);
    const [mealItems, setMealItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalHandler = (isOpen) =>{
        setIsModalOpen(()=>isOpen);
    }

    const addCart = (count, meal) =>{
        count = Number(count);
        setItemCount((currentCount)=>{
          return currentCount+count;
        });

        const index = mealItems.findIndex((mealItem)=>mealItem.id===meal.id);
        
        if(index>-1){
            setMealItems((mealItems)=>{
                mealItems[index].amount = mealItems[index].amount + count;
                return [...mealItems];
            });
            return;
        }

        setMealItems((mealItems)=>{
            meal.amount = count;
            return [...mealItems,meal];
        });

        // mealCount[meal.id] ? setMealCount((obj)=>{
        //     obj[meal.id].count = obj[meal.id].count+count;
        //     return {...obj};
        // }) : setMealCount((obj)=>{
        //     meal.count = count;
        //     obj[meal.id] = meal;
        //     return {...obj};
        // });
    };

    return (
        <ItemContext.Provider 
            value= {{
                itemCount,
                mealItems,
                isModalOpen,
                modalHandler,
                onSubmit : addCart,
            }}
        >
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContext;