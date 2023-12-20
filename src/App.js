import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import ItemContext, { ItemContextProvider } from "./components/store/item-context";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const modalHandler = (isOpen) =>{
    setIsModalOpen(()=>isOpen);
  };

  return (
    <>
      {isModalOpen && <Cart modalHandler={modalHandler}/>}
      <Header modalHandler={modalHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
