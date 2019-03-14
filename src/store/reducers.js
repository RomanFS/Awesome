import { combineReducers } from 'redux'
import daylistReducer from './daylist/reducer'
import dateReducer from './calendar/reducer'

export default combineReducers({
  daylist: daylistReducer,
  debug: dateReducer
})
