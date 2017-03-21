import * as utils from './index'

import gridReducer from '../reducers/gridReducer'

const state = gridReducer(undefined, {})

describe('utils', () => {
  it('should create game grid', () => {
    expect(
      utils.createGameGrid(3, 3)
    ).toEqual(
      [{active: false, x: 0, y: 0}, {active: false, x: 0, y: 1}, {active: false, x: 0, y: 2}, {active: false, x: 1, y: 0}, {active: false, x: 1, y: 1}, {active: false, x: 1, y: 2}, {active: false, x: 2, y: 0}, {active: false, x: 2, y: 1}, {active: false, x: 2, y: 2}]
    )
  })


  it('should find correct cell siblings', () => {
    expect(
      utils.findSiblings({x: 1, y: 1}, state)
    ).toEqual(
      [{x: 0,y: 1},{x: 2,y: 1},{x: 1,y: 1},{x: 1,y: 0},{x: 1,y: 2}]
    );
  })

  it('should return seeded number between two values', () => {
    expect(utils.getNumberInRangeBySeed(1, 1000, 'A')).toEqual(796)
    expect(utils.getNumberInRangeBySeed(100, 200)).toBeGreaterThanOrEqual(100)
    expect(utils.getNumberInRangeBySeed(1, 10)).toBeLessThanOrEqual(10)
  })

  it('should return cell coords based on a seed', () => {
    expect(utils.getGridCellCoordsBySeed('A')).toEqual({x: 0, y: 7})
  })

  it('should calculate percent value', () => {
    expect(utils.calculatePercent(250, 1000)).toEqual(25)
  })

})
