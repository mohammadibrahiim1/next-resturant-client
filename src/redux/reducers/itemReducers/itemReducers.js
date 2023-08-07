import {
  ADD_TO_CART,
  ADD_TO_MODAL,
  LOAD_CATEGORY,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
} from "../../actionTypes/actionTypes";

const initialState = {
  test: "TEST",
  modal: {},
  cart: [],
  products: [],
  categories: [],
};

const itemReducer = (state = initialState, action) => {
  console.log(state);
  // find selected item
  const selectedItem = state.cart.find((item) => item._id === action.payload._id);

  console.log(selectedItem);

  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    // case FILTER_DATA:
    //   const { slug } = action.payload;
    //   const filteredData = state.products.filter((item) => item.slug === slug);
    //   return { ...state, filteredData };
    case LOAD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_TO_MODAL:
      return {
        ...state,
        modal: { ...state.modal, ...action.payload },
      };
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
