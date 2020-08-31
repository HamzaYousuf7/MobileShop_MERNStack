import * as actionType from "../action/actionType/userActionType";

const INIT_STATE = {
  token: null,
  isLoading: false,
  isError: false,
  isAuthenticated: false,
  errorMessage: "",
  responseMessage: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.USER_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        token: action.token,
        isAuthenticated: true,
        responseMessage: action.responseMessage,
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
        token: null,
        isAuthenticated: false,
        responseMessage: "",
      };
    case actionType.LOGOUT_SUCCESSFULL:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        token: null,
        isAuthenticated: false,
        responseMessage: "",
      };
    case actionType.SINGUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        token: action.token,
        isAuthenticated: true,
        responseMessage: action.responseMessage,
      };
    case actionType.SINGUP_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: "",
        token: null,
        isAuthenticated: false,
        responseMessage: action.responseMessage,
      };
    default:
      return state;
  }
};

export default reducer;
