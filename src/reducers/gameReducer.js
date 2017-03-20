import { TOGGLE_CELLS, NEW_GAME } from '../constants/ActionTypes'
import { DEFAULT_SEED } from '../constants/GameConstants'

const initialState = {
	clicks: 0,
	seed: DEFAULT_SEED
}

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_CELLS:
			return {...state, clicks: state.clicks + 1}

		case NEW_GAME:
			return {...state, clicks: 0, seed: action.seed }

		default:
			return state
	}
}
