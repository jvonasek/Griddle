import * as G from '../constants/GameConstants'
import seedrandom from 'seedrandom'
import _ from 'lodash'

export const createGameGrid = (sizeX = G.GRID_X_SIZE, sizeY = G.GRID_Y_SIZE) => {
  const grid = []
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      grid.push({
        active: false,
        x: x,
        y: y
      })
    }
  }
  return grid
}

export const randomBetweenSeeded = (lower, upper, seed = 'ABC') => {
  var num = Math.floor(seedrandom(seed)() * (upper-lower+1) + lower)
  return num
}

export const getRandomGridCellCoordsSeeded = (seed) => {
  const x = randomBetweenSeeded(0, G.GRID_X_SIZE - 1, seed + 'x')
  const y = randomBetweenSeeded(0, G.GRID_Y_SIZE - 1, seed + 'y')
  return {x, y}
}

export const getCellByCoords = (coords, state) => {
  return _.chain(state).filter(coords).first().value()
}

export const countPercent = (num, total) => Math.round((num / total) * 100)
