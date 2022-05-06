import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: null,
  counter: 0,
  user: null,
}

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCounter(state, action) {
      return {
        ...state,
        counter: state.counter + 1,
      }
    },
  },
})

export const { addCounter } = usersReducer.actions

export default usersReducer.reducer
