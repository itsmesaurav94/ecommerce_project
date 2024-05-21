import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    color: 'red', 
    width: 50,
    height: 50
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height=state.height+1
    },
  },
})

export const { increment, decrement, reset } = boxSlice.actions
export default boxSlice.reducer