export const GET_BEERLIST = "GET_BEERLIST";
export const GET_BEERLIST_SUCCESS = "GET_BEERLIST_SUCCESS";
export const GET_BEERLIST_FAILED = "GET_BEERLIST_FAILED";

export const UPDATE_COLUMNS = "UPDATE_COLUMNS";

export const PLUS_FILTER = "PLUS_FILTER";
export const MINUS_FILTER = "MINUS_FILTER";

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
