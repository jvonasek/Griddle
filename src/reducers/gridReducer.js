import * as utils from '../utils'
import * as gameConstans from '../constants/GameConstants'
import { TOGGLE_CELLS, NEW_GAME } from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = {
  cells: utils.createGameGrid(),
  solution: [],
  xSize: gameConstans.GRID_X_SIZE,
  ySize: gameConstans.GRID_Y_SIZE,
}

const findSiblings = (coords, state) => {
  const middle = coords
  const left   = {x: coords.x - 1, y: coords.y}
  const right  = {x: coords.x + 1, y: coords.y}
  const top    = {x: coords.x, y: coords.y - 1}
  const bottom = {x: coords.x, y: coords.y + 1}

  return [left, right, middle, top, bottom];

}

const toggleCells = (cells, originCellCoords) => {
  const siblings = findSiblings(originCellCoords, cells);
  return cells.map((cell) => {
    let shouldCellUpdate = _.filter(siblings, {x: cell.x, y: cell.y}).length > 0
    return shouldCellUpdate ? { ...cell, active: !cell.active } : { ...cell }
  })
}

const newRandomGame = (state, seed) => {
  // reset all cells to active: false
  let cells = state.cells.map(cell => ({ ...cell, active: false }) )
  let solution = []

  const minIterations = Math.ceil(cells.length / 10)
  const maxIterations = Math.ceil(cells.length / 5)
  const iterations = utils.randomBetweenSeeded(minIterations, maxIterations, seed);

  for (let i = 0; i < iterations; i++) {
    // modify seed with each iteration
    let modifiedSeed = seed + i;

    // get random x/y coords
    let randomCellCoords = utils.getRandomGridCellCoordsSeeded(modifiedSeed)

    // if random cell is not a duplicate, add it to solution and modify the grid cells
    if (!_.some(solution, randomCellCoords)) {
      solution.push(randomCellCoords)
      cells = toggleCells(cells, randomCellCoords)
    }

  }

  return {
    ...state,
    cells,
    solution: _.sortBy(solution, 'x')
  }
}

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CELLS:
      return {
        ...state,
        cells: toggleCells(state.cells, action.coords)
      }

    case NEW_GAME:
      return newRandomGame(state, action.seed)

    default:
      return state
  }
}
