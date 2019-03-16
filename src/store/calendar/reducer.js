import Immutable from 'seamless-immutable'
import { DEBUG_ACTION, TRAIN_ACTION } from './actions'

const initialState = Immutable({
  iDate: 'd',
  items: ''
})

export default function daylistReducer(state = initialState, action) {
  switch (action.type) {
  case TRAIN_ACTION:
    console.log('TRAIN_ACTION')
    return {
      ...state,
      items: action.playload
    }
  default: {
    console.log('default')
    return state
  }
  }
}
