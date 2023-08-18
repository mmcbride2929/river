import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EventType } from '@testing-library/react'

interface EventState {
  map: string
  user: string
  bait: string
}

const initialState: EventState = {
  map: 'River-Bend',
  user: localStorage.getItem('userInfo'),
  bait: 'worms',
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    updateGameSession: (state, action: PayloadAction<Partial<EventState>>) => {
      state.map = action.payload.map || state.map
      state.user = action.payload.user || state.user
      state.bait = action.payload.bait || state.bait
    },
  },
})

// the actions calling the state's change
export const { updateGameSession } = eventSlice.actions

// what changes the state
export default eventSlice.reducer
