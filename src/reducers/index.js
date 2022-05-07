import { combineReducers } from 'redux'
import { usersApi } from './../services/usersApi/users.api'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
})

export default rootReducer
