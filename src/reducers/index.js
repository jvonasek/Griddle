import { combineReducers } from 'redux'
import gridReducer from './gridReducer'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  gridReducer,
  gameReducer
})

export default rootReducer
