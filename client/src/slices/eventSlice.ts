import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface EventState {
  map: string
  fishCaught: number,
  largestFish: number,
  
  // bait: string
}

const initialState: EventState = {
  map: 'River-Bend',
  fishCaught: 0,
  largestFish: 0,
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    updateGameSession: (state, action: PayloadAction<Partial<EventState>>) => {
      state.map = action.payload.map || state.map
      state.fishCaught = action.payload.fishCaught || state.fishCaught
      state.largestFish = action.payload.largestFish || state.largestFish

      
      // state.bait = action.payload.bait || state.bait
    },
    resetGameSession: () => initialState,
  },
})

// the actions calling the state's change
export const { updateGameSession, resetGameSession } = eventSlice.actions

// what changes the state
export default eventSlice.reducer
