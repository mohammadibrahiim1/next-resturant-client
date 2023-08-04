import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";

const initialState = {
  test: "TEST",
  cart: [],
};

const itemReducer = (state = initialState, action) => {
  // find selected item
  const selectedItem = state.cart.find((item) => item._id === action.payload._id);

  console.log(selectedItem);

  switch (action.type) {
    case ADD_TO_CART:
      if (selectedItem) {
        const newCart = state.cart.filter((item) => item._id !== selectedItem._id);

        selectedItem.quantity = selectedItem.quantity + 1;

        return { ...state, cart: [...newCart, selectedItem] };
      }

      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case REMOVE_FROM_CART:
      if (selectedItem.quantity > 1) {
        const newCart = state.cart.filter((item) => item._id !== selectedItem._id);
        selectedItem.quantity = selectedItem.quantity - 1;
        return { ...state, cart: [...newCart, selectedItem] };
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default itemReducer;
