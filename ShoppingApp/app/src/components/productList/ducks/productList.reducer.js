import * as ActionTypes from './productList.types';

const initialState = {
  loading: false,
  apiState: {
    isError: false,
    isSuccess: false,
  },
  error: null,
  productData: [],
  filterData: [],
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
        productData:
          action.payload &&
          action.payload.data &&
          action.payload.data.length > 0
            ? action.payload.data
            : [],
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

    case ActionTypes.CLEAR_PRODUCT_API_STATE:
      return {
        ...state,
        apiState: {
          ...initialState,
        },
      };

    case ActionTypes.ADD_FILTER_DATA:
      return {
        ...state,
        filterData: action.payload,
      };

    default:
      return state;
  }
}
