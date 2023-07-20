import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allItems, setAllItems] = useState([]);
  // console.log(allItems);
  const [filterItems, setFilterItems] = useState("");
  // console.log(filterItems);
  const [categories, setCategories] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  console.log(isModalOpen);

  // console.log(filterItems);

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
    setModalOpen(true);
    // toast.success("added successfully");
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  const removerFromCart = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id);
    localStorage.setItem("newCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    // toast.error("remove item from cart");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/allMenu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllItems(data);
      });
  }, []);

  const handleFilterItems = (slug) => {
    fetch(`http://localhost:5000/api/v1/allMenu?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        console.log(data);
      });
  };

  const info = {
    addToCart,
    // open,
    allItems,
    categories,
    handleFilterItems,
    filterItems,
    setFilterItems,
    removerFromCart,
    isModalOpen,
    closeModal,
    cart,
  };
  return (
    <div>
      <ApiContext.Provider value={info}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
