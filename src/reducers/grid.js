import * as utils from '../utils';
import * as GameConstants from '../constants/GameConstants';
import { TOGGLE_CELLS, NEW_GAME } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {
  cells: utils.createGameGrid(),
  solution: [],
  xSize: GameConstants.GRID_X_SIZE,
  ySize: GameConstants.GRID_Y_SIZE,
};

const toggleCells = (cells, originCellCoords) => {
  const siblings = utils.findSiblings(originCellCoords, cells);
  return cells.map((cell) => {
    const shouldCellUpdate = _.filter(siblings, { x: cell.x, y: cell.y }).length > 0;
    return shouldCellUpdate ? { ...cell, active: !cell.active } : { ...cell };
  });
};

const newRandomGame = (state, seed) => {
  // reset all cells to active: false
  let cells = state.cells.map((cell) => ({ ...cell, active: false }));
  const solution = [];

  const minIterations = Math.ceil(cells.length / 10);
  const maxIterations = Math.ceil(cells.length / 5);
  const iterations = utils.getNumberInRangeBySeed(minIterations, maxIterations, seed);

  for (let i = 0; i < iterations; i++) {
    // modify seed with each iteration
    const modifiedSeed = seed + i;

    // get random x/y coords
    const randomCellCoords = utils.getGridCellCoordsBySeed(modifiedSeed);

    // if random cell is not a duplicate, add it to solution and modify the grid cells
    if (!_.some(solution, randomCellCoords)) {
      solution.push(randomCellCoords);
      cells = toggleCells(cells, randomCellCoords);
    }
  }

  return {
    ...state,
    cells,
    solution: _.sortBy(solution, 'x'),
  };
};

const grid = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CELLS:
      return {
        ...state,
        cells: toggleCells(state.cells, action.payload.coords),
      };

    case NEW_GAME:
      return newRandomGame(state, action.payload.seed);

    default:
      return state;
  }
}

export default grid;

export const getCells = (state) => state.cells;
