
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: productId
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await fetch('http://localhost:2000/products');
      const data = await response.json();
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message
      });
    }
  };
};
