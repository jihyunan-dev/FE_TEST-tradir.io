import {
  GET_BEERLIST,
  GET_BEERLIST_FAILED,
  GET_BEERLIST_SUCCESS,
} from "./beerlist.action";

const initialState = {
  isLoading: false,
  beerlist: [],
  error: null,
};

const beerlist = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEERLIST:
      return { ...state, isLoading: true };
    case GET_BEERLIST_SUCCESS:
      return { ...state, isLoading: false, beerlist: action.payload };
    case GET_BEERLIST_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default beerlist;
