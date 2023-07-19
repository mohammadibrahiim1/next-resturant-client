import React, { createContext, useState } from "react";
export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (selectedItem) => {
    let newCart = [];
    const exists = cart.find((item) => item._id === selectedItem._id);
    if (!exists) {
      selectedItem.quantity = 1;
      newCart = [...cart, selectedItem];
    } else {
      const rest = cart.filter((item) => item._id !== selectedItem._id);
      newCart = [...rest, exists];
    }
    setCart(newCart);
    // toast.success("added successfully");
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  const removerFromCart = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id);
    localStorage.setItem("newCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    // toast.error("remove item from cart");
  };

  // const addToCart = async (item) => {
  //   try {
  //     await fetch("http://localhost:5000/api/v1/cart", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         item,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.acknowledged) {
  //           window.alert("saved successfully");
  //         } else {
  //           console.error(error.message);
  //         }
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   setCart(item);
  // };
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
