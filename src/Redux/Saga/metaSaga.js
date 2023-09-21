import {put, takeEvery} from 'redux-saga/effects';
import {API_URL} from '../appConfig';
import {
  GET_TITLE,
  REQUEST_CATEGORIES,
  REQ_TITLE,
  RETRIEVE_CATEGORIES,
} from '../Actions/actionTypes';

function* reqCat() {
  let data = yield fetch(API_URL);
  data = yield data.json();

  yield put({
    type: RETRIEVE_CATEGORIES,
    data: data.data[25]['procash/categories']['categories'],
  });
}

function* metaSaga() {
  yield takeEvery(REQUEST_CATEGORIES, reqCat);
}

export default metaSaga;
