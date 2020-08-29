import axios from "axios";
import * as actionType from "../actionType/productActionType";

const URL = `http://localhost:5000/api/product`;

const is_loading = () => {
  return {
    type: actionType.IS_LOADING,
  };
};

//! fetching single product
export const fetch_single_product_success = (singleProduct) => {
  return {
    type: actionType.FETCH_SINGLE_PRODUCT_SUCCESS,
    singleProduct: singleProduct,
  };
};

export const fetch_single_product_failed = (errorMessage) => {
  return {
    type: actionType.FETCH_SINGLE_PRODUCT_FAILED,
    errorMessage: errorMessage,
  };
};

export const get_single_product = (productID) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .get(URL + `/${productID}`)
      .then((res) => {
        console.log("Res From the server", res.data);
        dispatch(fetch_single_product_success(res.data.product));
      })
      .catch((error) => {
        console.log("error me kia he", error.message);
        dispatch(fetch_single_product_failed(error.message));
      });
  };
};

//!fetching home products

export const fetch_home_products_start = () => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .get(URL + `?isHomePage=true`)
      .then((res) => {
        console.log("res from the server home product",res.data.products);
        dispatch(fetch_home_products_success(res.data.products))
      })
      .catch((error) => {
        console.log("Error occur when fetching home product", error);
        dispatch(fetch_home_products_failed(error.message))
      });
  };
};

export const fetch_home_products_success = (products) => {
  return {
    type: actionType.FETCH_HOME_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetch_home_products_failed = (errorMessage) => {
  return {
    type: actionType.FETCH_SINGLE_PRODUCT_FAILED,
    errorMessage: errorMessage,
  };
};
