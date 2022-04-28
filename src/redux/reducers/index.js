import { combineReducers } from 'redux'
import userReducer from './users'
import recipeReducer from './recipe'

const rootReducers = combineReducers({
  user: userReducer,
  recipe: recipeReducer
})

export default rootReducers
