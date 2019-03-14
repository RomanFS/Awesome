import Immutable from 'seamless-immutable'
import { DEBUG_ACTION } from './actions'

const initialState = Immutable({
  iDate: 'd'
})

export default function daylistReducer(state = initialState, action) {
  switch (action.type) {
  case DEBUG_ACTION:
    return {
      ...state,
      iDate: action.playload
    }
  default: {
    return state
  }
  }
}
