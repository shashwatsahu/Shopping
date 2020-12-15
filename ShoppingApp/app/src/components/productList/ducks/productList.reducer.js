import * as ActionTypes from './productList.types';

const initialState = {
  loading: false,
  apiState: {
    isError: false,
    isSuccess: false,
  },
  error: null,
  productData: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PRODUCT_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        productData: action.payload.products,
        apiState: {
          ...state.apiState,
          isSuccess: true,
        },
      };

    case ActionTypes.PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        productData: [],
        apiState: {
          ...state.apiState,
          isError: true,
        },
      };

    default:
      return state;
  }
}
