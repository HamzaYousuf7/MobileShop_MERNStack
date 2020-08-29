import * as actionType from "../action/actionType";

const INIT_STATE = {
  products: [],
  isLoading: false,
  errorMessage: "",
  isError: false,
  responseMessage: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.IS_LOADING:
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

    default:
      return state;
  }
};

export default reducer;
