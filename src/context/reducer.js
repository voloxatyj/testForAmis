import { SET_NAME } from './types';

export const initialState = {
  name: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
