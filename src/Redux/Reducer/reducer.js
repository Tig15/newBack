import {
  LOAD_CAT_ERROR,
  LOAD_CAT_LOADING,
  LOAD_CAT_SUCCESS,
  RETRIEVE_CATEGORIES,
} from '../Actions/actionTypes';

const intState = {
  data: [],
  loading: false,
  error: '',
};

export const catReducer = (state = intState, action) => {
  switch (action.type) {
    case LOAD_CAT_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case LOAD_CAT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };

    case LOAD_CAT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
