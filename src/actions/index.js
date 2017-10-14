import * as ActionTypes from '../constants/ActionTypes';

export const toggleCells = (coords) => ({
  type: ActionTypes.TOGGLE_CELLS,
  payload: {
    coords
  },
});

export const newGame = (seed) => ({
  type: ActionTypes.NEW_GAME,
  payload: {
    seed,
  },
});

export const openDialog = () => ({
  type: ActionTypes.OPEN_DIALOG,
  payload: {
    title: 'hello',
    text: 'there',
  },
});
