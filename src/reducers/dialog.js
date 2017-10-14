import { OPEN_DIALOG, CLOSE_DIALOG } from '../constants/ActionTypes';

const initialState = {
  isOpen: false,
  title: null,
  text: null,
  buttons: [],
};

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}
