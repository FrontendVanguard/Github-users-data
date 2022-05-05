import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import { usersApi } from './services/usersApi/users.api'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware)
  }
})



export default store
