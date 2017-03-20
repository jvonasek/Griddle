import React, { Component } from 'react'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Expo } from 'gsap'
import { DEFAULT_SEED } from '../../constants/GameConstants'

import './Overlay.css'

class Overlay extends Component {

  componentDidMount() {
    this.addAnimation(this.createRevealAnim)
  }

  createRevealAnim({target}) {
    const overlay = target
    const overlayInner = target.find({className: 'Overlay-inner'})
    const text = overlayInner.findAll()
    return new TimelineMax()
      .from(overlay, 1, {
        opacity: 0,
      })
      .from(overlayInner, 0.4, {
        opacity: 0,
        scaleY: 0,
        ease: Expo.easeOut
      }, '-=0.5')
      .from(text[0], 0.8, {
        opacity: 0,
        x: 10,
      }, 'text', '-=0.5')
      .from(text[1], 0.8, {
        opacity: 0,
        x: -10,
      }, 'text')
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Overlay-inner">
          <div className="text-large">{this.props.title}</div>
          <div className="text-large">{this.props.text}</div>
          <button className="Overlay-button" onClick={() => this.props.newGame(DEFAULT_SEED)}>new game</button>
        </div>
      </div>
    )
  }
}

Overlay.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  newGame: React.PropTypes.func
}

export default GSAP()(Overlay)
