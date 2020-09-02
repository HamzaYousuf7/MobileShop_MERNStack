import * as actionType from "../action/actionType/adminActionType";

const INIT_STATE = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
  responseMessage: "",
  token: null,
  isAuth: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.ADMIN_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //WHen admin fetch all product successfully
    case actionType.GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.products,
        errorMessage: "",
      };
    //when admin failed to fetch all product
    case actionType.GET_ALL_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    //WHen admin  add new product successfully
    case actionType.ADD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        responseMessage: action.responseMessage,
        errorMessage: "",
      };
    //when admin add new product failed
    case actionType.ADD_NEW_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
        responseMessage: "",
      };
    //WHen admin  delete  product successfully
    case actionType.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        responseMessage: action.responseMessage,
        errorMessage: "",
      };
    //when admin delete product failed
    case actionType.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
        responseMessage: "",
      };
    case actionType.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        responseMessage: action.responseMessage,
        token: action.token,
        isAuth: true,
      };
    case actionType.ADMIN_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        token: null,
        responseMessage: "",
        isError: true,
        errorMessage: action.errorMessage,
        isAuth: false,
      };
    case actionType.ADMIN_LOGOUT:
      return {
        ...state,
        isLoading: false,
        token: null,
        responseMessage: "",
        isError: false,
        errorMessage: "",
        isAuth: false,
      };

    default:
      return state;
  }
};

export default reducer;
