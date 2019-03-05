import { combineReducers } from 'redux'
import daylistReducer from './daylist/reducer'

export default combineReducers({
  daylist: daylistReducer
})
