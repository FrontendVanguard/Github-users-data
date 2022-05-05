import { combineReducers } from 'redux'
import usersReducer from './users'
import { usersApi } from './../services/usersApi/users.api'


const rootReducer = combineReducers({
  users: usersReducer,
  [usersApi.reducerPath]: usersApi.reducer
})

export default rootReducer
