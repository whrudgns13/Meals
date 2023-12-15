import { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const addCart = (count) =>{
    setItemCount((currentCount)=>{
      return currentCount+count;
    });
  }
  return (
    <>
      <Header itemCount={itemCount}/>
      <main>
        <Meals submit={addCart}/>
      </main>
    </>
  );
}

export default App;
