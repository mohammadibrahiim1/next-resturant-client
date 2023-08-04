import { ADD_TO_CART } from "../actionTypes/actionTypes";

const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export default addToCart;
