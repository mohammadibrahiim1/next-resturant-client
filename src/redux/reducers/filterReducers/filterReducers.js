import { FILTER_DATA } from "../../actionTypes/actionTypes";

const initialState = {
  test: "filter",
  filteredData: [],
};

const filterReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        filteredData: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
