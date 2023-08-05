import axios from "axios";
import { loadCategory, loadProduct } from "../../action/action";

export const fetchProductsData = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/allMenu");
    console.log(res);
    // const data = await res.json();
    // console.log(data);
    dispatch(loadProduct(res.data));
  } catch (error) {
    console.log(error);
  }

  // return async (dispatch, getState) => {
  //   const res = await fetch("http://localhost:5000/api/v1/allMenu");
  //   const data = await res.json();
  //   console.log(data);
  //   if (data.length) {
  //     dispatch(loadProduct(data.item));
  //   }
  // };
};
export const fetchProductCategory = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/categories");
    console.log(res);
    // const data = await res.json();
    // console.log(data);
    dispatch(loadCategory(res.data));
  } catch (error) {
    console.log(error);
  }

  // return async (dispatch, getState) => {
  //   const res = await fetch("http://localhost:5000/api/v1/allMenu");
  //   const data = await res.json();
  //   console.log(data);
  //   if (data.length) {
  //     dispatch(loadProduct(data.item));
  //   }
  // };
};

// export default fetchProductsData;
