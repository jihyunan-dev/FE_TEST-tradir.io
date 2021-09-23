export const GET_BEERLIST = "GET_BEERLIST";
export const GET_BEERLIST_SUCCESS = "GET_BEERLIST_SUCCESS";
export const GET_BEERLIST_FAILED = "GET_BEERLIST_FAILED";

export const UPDATE_COLUMNS = "UPDATE_COLUMNS";

export const PLUS_FILTER = "PLUS_FILTER";
export const MINUS_FILTER = "MINUS_FILTER";

export const SET_MODAL_ID = "SET_MODAL_ID";
export const RESET_MODAL_ID = "RESET_MODAL_ID";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const getBeerlist = (payload) => ({ type: GET_BEERLIST, payload });
export const getBeerlistSuccess = (payload) => ({
  type: GET_BEERLIST_SUCCESS,
  payload,
});
export const getBeerlistFailed = (payload) => ({
  type: GET_BEERLIST_FAILED,
  payload,
});

export const updateColumns = (payload) => ({ type: UPDATE_COLUMNS, payload });

export const plusFilter = (payload) => ({ type: PLUS_FILTER, payload });
export const minusFilter = (payload) => ({ type: MINUS_FILTER, payload });

export const setModalId = (payload) => ({
  type: SET_MODAL_ID,
  payload,
});
export const resetModalId = (payload) => ({
  type: RESET_MODAL_ID,
  payload,
});
export const toggleModal = (payload) => ({
  type: TOGGLE_MODAL,
  payload,
});
