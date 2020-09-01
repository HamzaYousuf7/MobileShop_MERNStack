import * as actionType from "../action/actionType/productActionType";

const INIT_STATE = {
  products: [],
  userCart: [],
  totalPrice: 0,
  singleProduct: null,
  isLoading: false,
  isError: false,
  maxProductCount: 0,
  errorMessage: "",
  responseMessage: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.PRODUCTS_IS_LOADING:
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
    case actionType.ADD_PRODUCT_IN_CART:
      const cartProduct = action.product;
      const tempProductArr = [...state.userCart];
      let tempPrice = state.totalPrice;

      // first checking weather we have the product or not
      const isProductExist = state.userCart.find(
        (p) => p._id === cartProduct._id
      );
      if (isProductExist) {
        const index = tempProductArr.findIndex(
          (p) => p._id === cartProduct._id
        );
        const tempObj = tempProductArr[index]; // getting that obj
        tempObj.quantity += 1; // increasing its quantity
        tempProductArr[index] = tempObj; // updating the array
      } else {
        tempProductArr.push(cartProduct);
      }
      //updating the price
      tempPrice = tempPrice + (cartProduct.price - 100);
      console.log("final result of cart func", tempProductArr, tempPrice);
      return {
        ...state,
        userCart: tempProductArr,
        totalPrice: tempPrice,
      };
    default:
      return state;
  }
};

export default reducer;
