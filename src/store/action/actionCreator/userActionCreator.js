import * as actionType from "../actionType/userActionType";
import axios from "axios";

const URL = "http://localhost:5000/api/user";
let setTimeOut;

const is_loading = () => {
  return {
    type: actionType.USER_IS_LOADING,
  };
};

///login strat
export const login_start = (userData) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .post(URL + `/login`, userData)
      .then((res) => {
        console.log(res.data);
        const expiresIn = res.data.expiresIn;
        //now all the time calculation
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        saveAuthData(res.data.token, expirationDate);
        dispatch(login_success(res.data.token, res.data.message));
      })
      .catch((error) => {
        console.log(error);
        dispatch(login_failed("SOmething when worng"));
      });
  };
};

const login_success = (token, responseMessage) => {
  return {
    type: actionType.LOGIN_SUCCESS,
    token,
    responseMessage,
  };
};

const login_failed = (errorMessage) => {
  return {
    type: actionType.LOGIN_FAILED,
    errorMessage,
  };
};

//logout start

export const logout_start = () => {
  return (dispatch) => {
    dispatch(is_loading());
    dispatch(logout_successfull());
  };
};

const logout_successfull = () => {
  clearAuthData();
  return {
    type: actionType.LOGOUT_SUCCESSFULL,
  };
};

//SAVING TOKEN IN LOCAL storage
const saveAuthData = (token, expirationDate) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate.toISOString());
};

//clearing TOKEN IN LOCAL storage
const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
};

const getAuthData = () => {
  const token = localStorage.getItem("token");
  const expidationDateLocal = localStorage.getItem("expirationDate");

  if (!token || !expidationDateLocal) {
    return;
  }

  return {
    token,
    expirationDate: new Date(expidationDateLocal),
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    let authInformation = getAuthData();

    if (!authInformation) {
      return;
    }

    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    console.log("woring", authInformation.expirationDate);
    if (expiresIn > 0) {
      console.log("woring", expiresIn);
      dispatch(login_success(authInformation.token, ""));
      setAuthTimer(expiresIn / 1000);
    }
  };
};

const setAuthTimer = (duration) => {
  setTimeOut = setTimeout(() => {
    logout_successfull();
  }, duration * 1000);
};
