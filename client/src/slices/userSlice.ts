import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserState {
  user: string,
  totalFishCaught: number,
  
}

const initialState: UserState = {
  user: localStorage.getItem('userInfo') || '',
  totalFishCaught: 0,  
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<EventState>>) => {
      state.totalFishCaught = action.payload.totalFishCaught || state.totalFishCaught
      state.user = action.payload.user || state.user 
    },
  },
})

// the actions calling the state's change
export const { updateUser } = userSlice.actions

// what changes the state
export default userSlice.reducer
