import axios from "axios";
import * as actionType from "./actionType";

const URL =`http://localhost:5000/api/product`;

const is_loading = () => {
  return {
    type: actionType.IS_LOADING,
  };
};

export const get_all_data_success = (products) => {
  return {
    type: actionType.GET_ALL_DATA_SUCCESS,
    products: products,
  };
};

export const get_all_data_failed = (errorMessage) => {
  return {
    type: actionType.GET_ALL_DATA_FAILED,
    errorMessage: errorMessage,
  };
};

export const get_all_data_start = () => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .get("http://localhost:5000/api/product?isHomePage=true")
      .then((res) => {
        console.log("Res From the server", res.data);
        dispatch(get_all_data_success(res.data.products));
      })
      .catch((error) => {
        console.log("error me kia he", error.message);
        dispatch(get_all_data_failed(error.message));
      });
  };
};

//adding new product 
export const add_new_product_start = (newProduct) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .post(URL,newProduct)
      .then((res) => {
        console.log("Res From the server", res.data);
        dispatch(add_new_product_success(res.data.message));
      })
      .catch((error) => {
        console.log("error me kia he", error.message);
        dispatch(add_new_product_failed(error.message));
      });
  };
};

export const add_new_product_success = (responseMessage) => {
  return {
    type: actionType.ADD_NEW_PRODUCT_SUCCESS,
    responseMessage: responseMessage,
  };
};

export const add_new_product_failed = (errorMessage) => {
  return {
    type: actionType.ADD_NEW_PRODUCT_FAILED,
    errorMessage: errorMessage,
  };
};