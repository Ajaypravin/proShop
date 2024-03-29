import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case PRODUCT_LIST_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      console.log(state);
      return state;
  }
};

export const productDetailReducer = (
  state = {
    product: {
      reviews: [],
    },
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { product: action.payload, loading: false };
    case PRODUCT_DETAIL_FAIL:
      return { error: action.payload, loading: false };

    default:
      console.log(state);
      return state;
  }
};
