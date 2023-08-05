import { ADD_TO_CART, LOAD_CATEGORY, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

// fetch food items from database using redux thunk
export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};
export const loadCategory = (category) => {
  return {
    type: LOAD_CATEGORY,
    payload: category,
  };
};
// add your item to cart
export const addToCart = (selectItem) => {
  return {
    type: ADD_TO_CART,
    payload: selectItem,
  };
};

// remove item from cart
export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
