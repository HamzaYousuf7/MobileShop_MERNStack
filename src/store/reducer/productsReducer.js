import * as actionType from "../action/actionType/productActionType";

const INIT_STATE = {
  products: [],
  singleProduct:null,
  isLoading: false,
  isError: false,
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

    default:
      return state;
  }
};

export default reducer;
