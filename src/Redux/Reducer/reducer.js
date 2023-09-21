import {GET_TITLE, RETRIEVE_CATEGORIES} from '../Actions/actionTypes';

const intState = [];

export const catReducer = (state = intState, action) => {
  switch (action.type) {
    case RETRIEVE_CATEGORIES:
      return [...state, action.data];

    default:
      return state;
  }
};
