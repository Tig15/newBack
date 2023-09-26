import {LOAD_CAT_LOADING} from './actionTypes';

export function requestCat() {
  return {
    type: LOAD_CAT_LOADING,
  };
}
