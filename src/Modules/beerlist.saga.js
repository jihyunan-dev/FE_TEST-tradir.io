import { takeLatest, put } from "redux-saga/effects";
import { getBeers } from "../api";

import {
  GET_BEERLIST,
  getBeerlistSuccess,
  getBeerlistFailed,
} from "./beerlist.action";

function* getBeerlistSaga() {
  try {
    const result = yield getBeers();
    yield put(getBeerlistSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(getBeerlistFailed(e));
  }
}

function* getBeerlistWatcher() {
  yield takeLatest(GET_BEERLIST, getBeerlistSaga);
}

export default getBeerlistWatcher;
