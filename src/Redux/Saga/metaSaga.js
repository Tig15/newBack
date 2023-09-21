import {put, takeEvery} from 'redux-saga/effects';
import {REQUEST_CATEGORIES, RETRIEVE_CATEGORIES} from '../Actions/actionTypes';

function* reqCat() {
  let data = yield fetch('https://lbp8api.enactweb.com/public/apphome');
  data = yield data.json();

  console.log('Data', data);
  yield put({
    type: RETRIEVE_CATEGORIES,
    data: data.data[25]['procash/categories']['categories'],
  });
}

function* metaSaga() {
  yield takeEvery(REQUEST_CATEGORIES, reqCat);
}

export default metaSaga;
