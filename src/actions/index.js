import * as types from '../constants/ActionTypes'

export const toggleCells = coords => ({ type: types.TOGGLE_CELLS, coords })
export const newGame     = seed   => ({ type: types.NEW_GAME, seed })
