import {put, takeEvery} from 'redux-saga/effects';
import {REQUEST_CATEGORIES, RETRIEVE_CATEGORIES} from '../Actions/actionTypes';

function* reqCat() {
  try {
    const response = yield fetch('https://api.bionapp.com/public/apphome');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = yield response.json();

    console.log('Data', data);

    if (data.data) {
      yield put({
        type: RETRIEVE_CATEGORIES,
        data: data.data,
      });
    } else {
      console.error('Invalid data format:', data);
    }
  } catch (error) {
    console.log('Error fetching or parsing data:', error);
  }
}

function* metaSaga() {
  yield takeEvery(REQUEST_CATEGORIES, reqCat);
}

export default metaSaga;
