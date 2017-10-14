import { TOGGLE_CELLS, NEW_GAME } from '../constants/ActionTypes';
import { DEFAULT_SEED, GRID_X_SIZE, GRID_Y_SIZE } from '../constants/GameConstants';

const initialState = {
  clicks: 0,
  seed: DEFAULT_SEED,
  xSize: GRID_X_SIZE,
  ySize: GRID_Y_SIZE,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CELLS:
      return { ...state, clicks: state.clicks + 1 };

    case NEW_GAME:
      return { ...state, clicks: 0, seed: action.payload.seed };

    default:
      return state;
  }
}

export default game;

export const getSeed = (state) => state.seed;
export const getClicks = (state) => state.clicks;
export const getXSize = (state) => state.xSize;
