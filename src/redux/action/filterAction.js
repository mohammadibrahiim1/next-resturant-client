import { FILTER_DATA } from "../actionTypes/actionTypes";

// export const handleFilterData = (data) => async (dispatch) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/v1/allMenu?slug=${slug}`);
//     console.log(response);
//     const data = await response.json();
//     dispatch({ type: FILTER_DATA, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// filterDataBySlug
export const filterDataBySlug = (data) => {
  return {
    type: FILTER_DATA,
    payload: data,
  };
};
