import axios from "axios";
import * as actionType from "../actionType/productActionType";

const URL = `http://localhost:5000/api/product`;

const is_loading = () => {
  return {
    type: actionType.IS_LOADING,
  };
};

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
