import * as actionType from "../action/actionType/productActionType";

const INIT_STATE = {
  products: [],
  singleProduct: null,
  isLoading: false,
  isError: false,
  maxProductCount: 0,
  errorMessage: "",
  responseMessage: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //WHen fetch single product successfully
    case actionType.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleProduct: action.singleProduct,
        errorMessage: "",
      };
    //when fetch single product failed
    case actionType.FETCH_SINGLE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    //fetching home product success
    case actionType.FETCH_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.products,
        errorMessage: "",
      };
    //when fetch single product failed
    case actionType.FETCH_HOME_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    //when we fetch product for product comp
    case actionType.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        isLoading: false,
        isError: false,
        maxProductCount: action.maxProductCount,
      };
    case actionType.FETCH_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
