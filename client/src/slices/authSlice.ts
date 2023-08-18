import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  userInfo: {
    _id: string
    name: string
    email: string
  } | null
}

const initialState: UserState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logoutUser: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },
  },
})

// the actions calling the state's change
export const { setCredentials, logoutUser } = authSlice.actions

// what changes the state
export default authSlice.reducer
