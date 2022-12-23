import { combineReducers } from 'redux'
import todos from './todos'
import VisibilityFilters from './VisibilityFilters'

export default combineReducers({
  todos,
  VisibilityFilters
})