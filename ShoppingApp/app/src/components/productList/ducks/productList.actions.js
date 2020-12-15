import * as ActionTypes from './productList.types';
import {PRODUCT_API} from './productList.services';

export const fetchProductLoading = () => ({
  type: ActionTypes.PRODUCT_LIST_LOADING,
});

export const fetchProductSuccess = (data) => ({
  type: ActionTypes.PRODUCT_LIST_SUCCESS,
  payload: {data},
});

export const fetchProductError = (error) => ({
  type: ActionTypes.PRODUCT_LIST_ERROR,
  payload: {error},
});

export const clearProductState = () => ({
  type: ActionTypes.CLEAR_PRODUCT_API_STATE,
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductLoading());
    return fetch(PRODUCT_API)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductSuccess(json.products));
        return json.products;
      })
      .catch((error) => dispatch(fetchProductError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const addFilterData = (data) => ({
  type: ActionTypes.ADD_FILTER_DATA,
  payload: data,
});
