import axios from "axios";
import * as actionType from "./actionType";

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
    console.log("jsdfhjk");
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
