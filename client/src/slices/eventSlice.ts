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
  
  // bait: 'worms',
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
  },
})

// the actions calling the state's change
export const { updateGameSession } = eventSlice.actions

// what changes the state
export default eventSlice.reducer
