import { FILTER_DATA } from "../actionTypes/actionTypes";

export const filterDataBySlug = (data) => {
  dispatch({
    type: FILTER_DATA,
    payload: data,
  });
};

// export const loadProduct = (data) => {
//   return {
//     type: LOAD_PRODUCT,
//     payload: data,
//   };
// };


