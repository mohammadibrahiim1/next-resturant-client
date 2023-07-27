import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

export const ApiContext = createContext();
// const cartFromLocalStorage = JSON.parse(localStorage.getItem("newCart") || "[]");

const DataContext = ({ children }) => {
  // const [quantity, setQuantity] = useState(1);
  // console.log(quantity);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  );
  // console.log(cartItems);
  const [allItems, setAllItems] = useState([]);
  // console.log(allItems);
  const [filterItems, setFilterItems] = useState("");
  // console.log(filterItems);
  const [categories, setCategories] = useState([]);
  const [selectItem, setSelectItem] = useState({});
  console.log(selectItem);

  const [topping, setTopping] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("branch"));
    if (items) {
      setTopping(items);
    }
  }, []);
  // console.log(topping);

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("branch", JSON.stringify(topping));
  }, [topping]);

  // console.log(filterItems);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? {
                ...cartItem,
              }
            : cartItem
        )
      );
    } else {
      toast.success(`added ${item.name}  successfully`);
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
          cartItem._id === item._id
            ? {
                ...cartItem,
                //  quantity: cartItem.quantity - 1
              }
            : cartItem
        )
      );
    }
  };

  //  increase cart product quantity
  const handleIncrement = (id) => {
    const incrementItem = cartItems.map((cartItem) => {
      if (cartItem._id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    setCartItems(incrementItem);
  };

  const handleDecrement = (id) => {
    const decrementItem = cartItems.map((cartItem) => {
      if (cartItem._id === id && cartItem.quantity > 1) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
      return cartItem;
    });
    setCartItems(decrementItem);
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

  const [branches, setBranches] = useState([]);
  // console.log(branches);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/branches")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBranches(data);
      });
  }, []);
  // const [showModal, setShowModal] = React.useState(false);
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
    // isModalOpen,
    closeModal,
    handleDecrement,
    handleIncrement,
    branches,
    topping,
    onOptionChange,
    setSelectItem,
    selectItem,
  };
  return (
    <div>
      <ApiContext.Provider value={info}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
