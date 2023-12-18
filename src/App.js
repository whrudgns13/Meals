import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import ItemContext, { ItemContextProvider } from "./components/store/item-context";

function App() {
  // const [itemCount, setItemCount] = useState(0);
  // const addCart = (count) =>{
  //   setItemCount((currentCount)=>{
  //     return currentCount+Number(count);
  //   });
  // }
  const context = useContext(ItemContext);

  return (
    <>
      {context.isModalOpen && <Cart/>}
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
