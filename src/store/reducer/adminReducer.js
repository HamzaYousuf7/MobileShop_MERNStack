import * as actionType from "../action/actionType";

const INIT_STATE = {
  products: [],
  isLoading: false,
  errorMessage: "",
  isError:false
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
        isError:false,
        products: action.products,
        errorMessage: "",
      };
      //when admin failed to fetch all product
    case actionType.GET_ALL_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError:true,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

export default reducer;
