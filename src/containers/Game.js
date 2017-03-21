import React, { Component } from 'react'
import _ from 'lodash'
import { calculatePercent } from '../utils'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'

import Grid from '../components/Grid'
import Score from '../components/Score'
import ProgressBar from '../components/ProgressBar'
import SeedInput from '../components/SeedInput'
import Overlay from '../components/Overlay'

import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props)

    this.actions = this.props.store.actions
  }

  componentDidMount() {
    this.actions.newGame(this.props.store.game.seed)
    this.addAnimation(this.createRevealAnim)
  }

  solveGame(solution) {
    this.actions.newGame(this.props.store.game.seed)

    let i = 0;
    const interval = setInterval(() => {
      let coords = solution[i]
      this.actions.toggleCells(coords);
      i++;

      if (i >= solution.length) {
        clearInterval(interval);
      }
    }, 1000);
  }

  createRevealAnim({target}) {
    const items = [target.find({className: 'header'}), target.find({className: 'footer'})]
    return new TimelineMax()
      .from(items, 1, {
        opacity: 0,
        delay: 1.5
      })
  }

  render() {
    const { grid, game } = this.props.store
    const activeCount = _.filter(grid.cells, {active: true}).length;
    const percent = calculatePercent(activeCount, grid.cells.length)
    const seed = game.seed

    return (
      <div className="GameContainer">
        <div className="header">
          <ProgressBar percent={percent} />
          <SeedInput seed={seed} {...this.actions} />
        </div>
        <Grid cells={grid.cells} xSize={grid.xSize} ySize={grid.ySize} {...this.actions}/>
        <div className="footer">
          <div className="footer-left">
            <Score score={game.clicks} />
            <div className="Hint">Get rid of red cells in least amount of clicks.</div>
          </div>
          <div className="footer-right text-right">
            <button className="button" onClick={() => this.solveGame(grid.solution)}>solve game</button>
          </div>
        </div>
        {
          activeCount === 0
          ? <Overlay title={'Good job!'} text={`You needed ${game.clicks} clicks.`} {...this.actions} />
          : null
        }
      </div>
    )
  }
}

export default GSAP()(Game)
