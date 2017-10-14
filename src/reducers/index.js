import { combineReducers } from 'redux';

import grid, * as fromGrid from './grid';
import game, * as fromGame from './game';
import dialog from './dialog';

import { calculatePercent } from '../utils';

const rootReducer = combineReducers({
  grid,
  game,
  dialog,
});

export default rootReducer;

export const getCells = (state) => fromGrid.getCells(state.grid);

export const getSeed = (state) => fromGame.getSeed(state.game);
export const getClicks = (state) => fromGame.getClicks(state.game);
export const getXSize = (state) => fromGame.getXSize(state.game);

export const getDialog = (state) => state.dialog;

export const getPercent = (state) => {
  const cells = getCells(state);
  const activeCells = cells.filter((cell) => cell.active === true);
  return calculatePercent(activeCells.length, cells.length);
}
