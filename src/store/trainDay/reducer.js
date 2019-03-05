import Immutable from 'seamless-immutable'
import { DAY_ACTION } from './actions'
import trainlist from '../../services/trainlist'

const initialState = Immutable({
  trainlist
})

export default function daylistReducer(state = initialState, action) {
  switch (action.type) {
  case DAY_ACTION:
    return {
      ...state,
      type: action.playload
    }
  default: {
    return state
  }
  }
}
