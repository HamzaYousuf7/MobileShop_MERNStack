import axios from "axios";
import * as actionType from "../actionType/adminActionType";

const URL = `http://localhost:5000/api/product`;

const is_loading = () => {
  return {
    type: actionType.ADMIN_IS_LOADING,
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
      .get("http://localhost:5000/api/product?isAdmin=true")
      .then((res) => {
        //console.log("Res From the server", res.data);
        dispatch(get_all_data_success(res.data.products));
      })
      .catch((error) => {
        //console.log("error me kia he", error.message);
        dispatch(get_all_data_failed(error.message));
      });
  };
};

//adding new product
export const add_new_product_start = (newProduct) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .post(URL, newProduct)
      .then((res) => {
        //console.log("Res From the server", res.data);
        dispatch(add_new_product_success(res.data.message));
      })
      .catch((error) => {
       // console.log("error me kia he", error.message);
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

//DELETE product
export const delete_product_start = (productID) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .delete(URL + `/${productID}`)
      .then((res) => {
        //console.log("Res From the server", res.data);
        dispatch(delete_product_success(res.data.message));
      })
      .catch((error) => {
       // console.log("error me kia he", error.message);
        dispatch(delete_product_failed(error.message));
      });
  };
};

export const delete_product_success = (responseMessage) => {
  return {
    type: actionType.DELETE_PRODUCT_SUCCESS,
    responseMessage: responseMessage,
  };
};

export const delete_product_failed = (errorMessage) => {
  return {
    type: actionType.DELETE_PRODUCT_FAILED,
    errorMessage: errorMessage,
  };
};

///admin LOGIN START

export const admin_login_start = (adminData) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .post("http://localhost:5000/api/admin/login", adminData)
      .then((res) => {
       // console.log("what we get when admin login", res);
        dispatch(admin_login_success(res.data.token, res.data.message));
      })
      .catch((error) => {
       // console.log("error occur when admin login", error);
        dispatch(
          admin_login_failed(
            "check email or password or something wet wrong please try again"
          )
        );
      });
  };
};

const admin_login_success = (token, responseMessage) => {
  return {
    type: actionType.ADMIN_LOGIN_SUCCESS,
    token,
    responseMessage,
  };
};

const admin_login_failed = (errorMessage) => {
  return {
    type: actionType.ADMIN_LOGIN_FAILED,
    errorMessage,
  };
};

// admin logut

export const admin_logout_start = () => {
  return (dispatch) => {
    dispatch(admin_logout());
  };
};

const admin_logout = () => {
  return {
    type: actionType.ADMIN_LOGOUT,
  };
};
