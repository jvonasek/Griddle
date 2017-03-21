import * as utils from '../utils'
import * as gameConstants from '../constants/GameConstants'
import { TOGGLE_CELLS, NEW_GAME } from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = {
  cells: utils.createGameGrid(),
  solution: [],
  xSize: gameConstants.GRID_X_SIZE,
  ySize: gameConstants.GRID_Y_SIZE,
}

const toggleCells = (cells, originCellCoords) => {
  const siblings = utils.findSiblings(originCellCoords, cells)
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
  const iterations = utils.getNumberInRangeBySeed(minIterations, maxIterations, seed)

  for (let i = 0; i < iterations; i++) {
    // modify seed with each iteration
    let modifiedSeed = seed + i

    // get random x/y coords
    let randomCellCoords = utils.getGridCellCoordsBySeed(modifiedSeed)

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
