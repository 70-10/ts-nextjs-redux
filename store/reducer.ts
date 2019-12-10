import { combineReducers } from '@reduxjs/toolkit'
import counterModule from './counter'
import todosModule from './todos'

const rootReducer = combineReducers({
  counter: counterModule.reducer,
  todos: todosModule.reducer
})

export default rootReducer
