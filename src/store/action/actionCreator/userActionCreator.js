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
        //console.log(res.data);
        const expiresIn = res.data.expiresIn;
        //now all the time calculation
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        saveAuthData(res.data.token, expirationDate, res.data.userID);
        dispatch(
          login_success(res.data.token, res.data.message, res.data.userID)
        );
      })
      .catch((error) => {
        //console.log(error);
        dispatch(login_failed("SOmething when worng"));
      });
  };
};

const login_success = (token, responseMessage, userID) => {
  return {
    type: actionType.LOGIN_SUCCESS,
    token,
    responseMessage,
    userID,
  };
};

const login_failed = (errorMessage) => {
  return {
    type: actionType.LOGIN_FAILED,
    errorMessage,
  };
};

//SINGUP START
export const singup_start = (singupData) => {
  return (dispatch) => {
    dispatch(is_loading());
    axios
      .post(URL + `/singup`, singupData)
      .then((res) => {
        //console.log(res.data);
        const expiresIn = res.data.expiresIn;
        const now = new Date();
        const expirationDate = now.getTime() + expiresIn * 1000;
        saveAuthData(res.data.token, expirationDate, res.data.userID);
        dispatch(singup_successfull(res.data.token, res.data.message,res.data.userID));
      })
      .catch((error) => {
        //console.log("error when singup", error);
        dispatch(singup_failed("Something went wrong"));
      });
  };
};

const singup_successfull = (token, responseMessage,userID) => {
  return {
    type: actionType.SINGUP_SUCCESS,
    token,
    responseMessage,
    userID
  };
};

const singup_failed = (errorMessage) => {
  return {
    type: actionType.SINGUP_FAILED,
    errorMessage,
  };
};
//logout start
export const logout_start = () => {
  return (dispatch) => {
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
const saveAuthData = (token, expirationDate, userID) => {
  localStorage.setItem("token", token);
  localStorage.setItem(
    "expirationDate",
    new Date(expirationDate).toISOString()
  );
  localStorage.setItem("userID", userID);
};

//clearing TOKEN IN LOCAL storage
const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userID");
};

const getAuthData = () => {
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("userID");
  const expidationDateLocal = localStorage.getItem("expirationDate");

  if (!token || !expidationDateLocal || !userID) {
    return;
  }

  return {
    token,
    expirationDate: new Date(expidationDateLocal),
    userID,
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
    //console.log("woring", authInformation.expirationDate);
    if (expiresIn > 0) {
      //console.log("woring", expiresIn);
      dispatch(
        login_success(authInformation.token, "", authInformation.userID)
      );
      //setAuthTimer(expiresIn / 1000);
    }
  };
};

//TODO AUTO LOGOUT FUNC kar le agar krna he 
const setAuthTimer = (duration) => {
  setTimeOut = setTimeout(() => {
    //TODO CHECK ITS IMPLEMENTATION
  }, duration * 1000);
};
