import React, { createContext, useState } from "react";
export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = async (item) => {
    try {
      await fetch("http://localhost:5000/api/v1/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          item,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            window.alert("saved successfully");
          } else {
            console.error(error.message);
          }
        });
    } catch (error) {
      console.error(error);
    }

    setCart(item);
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
