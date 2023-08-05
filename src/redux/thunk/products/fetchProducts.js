import axios from "axios";
import { loadCategory, loadProduct } from "../../action/action";
import { filterDataBySlug } from "../../action/filterAction";

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
export const handleFilterItem = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/allMenu?slug=${slug}`);
    dispatch(filterDataBySlug(res.data));
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  // fetch(`http://localhost:5000/api/v1/allMenu?slug=${slug}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setAllItems(data);
  //     // console.log(data);
  //   });
};

// export default fetchProductsData;
