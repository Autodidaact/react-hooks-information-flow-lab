import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsCliked] = useState(false);
  function handleDarkModeClick(childClick) {
    childClick = !isClicked;
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setIsCliked((isClicked) => childClick);
  
  }
  

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header click={isClicked} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
