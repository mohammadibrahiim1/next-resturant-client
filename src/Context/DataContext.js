import React, { createContext, useState } from "react";
export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    console.log("add to cart");
  };
  const info = {
    addToCart,
  };
  return (
    <div>
      <ApiContext.Provider value={info}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
