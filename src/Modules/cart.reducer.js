import { ADD_CART, DELETE_CART } from "./cart.action";

const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default cart;
