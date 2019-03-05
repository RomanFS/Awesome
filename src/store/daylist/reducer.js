import Immutable from 'seamless-immutable'
import { DAYLIST_ACTION } from './actions'
import trainlist from '../../services/trainlist'

const initialState = Immutable({
  trainlist,
  num: null
})

export default function daylistReducer(state = initialState, action) {
  switch (action.type) {
  case DAYLIST_ACTION:
    return {
      ...state,
      num: action.playload
    }
  default: {
    return state
  }
  }
}
