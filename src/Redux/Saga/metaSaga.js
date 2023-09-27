import {put, takeEvery} from 'redux-saga/effects';
import {
  LOAD_CAT_ERROR,
  LOAD_CAT_LOADING,
  LOAD_CAT_SUCCESS,
} from '../Actions/actionTypes';

function* reqCat() {
  try {
    // const response = yield fetch('https://lbp8api.enactweb.com/public/apphome');
    const response = yield fetch('https://api.bionapp.com/public/apphome');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = yield response.json();

    console.log('Data', data);

    yield put({
      type: LOAD_CAT_SUCCESS,
      data: data.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_CAT_ERROR,
      error: error.message,
    });
  }
}

function* metaSaga() {
  yield takeEvery(LOAD_CAT_LOADING, reqCat);
}

export default metaSaga;
