import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

export const ApiContext = createContext();
// const cartFromLocalStorage = JSON.parse(localStorage.getItem("newCart") || "[]");

const DataContext = ({ children }) => {
  // const [productQuantity, setProductQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  );
  console.log(cartItems);
  const [allItems, setAllItems] = useState([]);
  // console.log(allItems);
  const [filterItems, setFilterItems] = useState("");
  // console.log(filterItems);
  const [categories, setCategories] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  // console.log(isModalOpen);

  // console.log(filterItems);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  // let newCart = [];
  // const exists = cart.find((item) => item._id === selectedItem._id);
  // if (!exists) {
  //   selectedItem.quantity = 1;
  //   newCart = [...cart, selectedItem];
  // } else {
  //   const rest = cart.filter((item) => item._id !== selectedItem._id);
  //   exists.quantity = exists.quantity + 1;
  //   newCart = [...rest, exists];
  // }
  // toast.success(`added ${selectedItem.name} successfully `);
  // setCart(newCart);
  // // setModalOpen(true);
  // // toast.success("added successfully");
  // localStorage.setItem("newCart", JSON.stringify(newCart));

  // const removerFromCart = (_id) => {
  //   const updatedCart = cart.filter((item) => item._id !== _id);
  //   localStorage.setItem("newCart", JSON.stringify(updatedCart));
  //   setCart(updatedCart);
  //   // toast.error("remove item from cart");
  // };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/allMenu")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllItems(data);
      });
  }, []);

  const handleFilterItems = (slug) => {
    fetch(`http://localhost:5000/api/v1/allMenu?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        // console.log(data);
      });
  };

  const info = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    allItems,
    categories,
    handleFilterItems,
    filterItems,
    setFilterItems,
    // removerFromCart,
    isModalOpen,
    closeModal,
  };
  return (
    <div>
      <ApiContext.Provider value={info}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
