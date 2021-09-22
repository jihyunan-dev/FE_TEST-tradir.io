export const GET_BEERLIST = "GET_BEERLIST";
export const GET_BEERLIST_SUCCESS = "GET_BEERLIST_SUCCESS";
export const GET_BEERLIST_FAILED = "GET_BEERLIST_FAILED";

export const getBeerlist = (payload) => ({ type: GET_BEERLIST, payload });
export const getBeerlistSuccess = (payload) => ({
  type: GET_BEERLIST_SUCCESS,
  payload,
});
export const getBeerlistFailed = (payload) => ({
  type: GET_BEERLIST_FAILED,
  payload,
});
