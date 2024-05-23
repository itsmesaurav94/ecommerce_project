import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red', 
    width: 50,
    height: 50
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height=state.height+5
    },
    changeWidth(state) {
      state.width=state.width+5
    },
     changeShape(state) {
      state.height=state.height+5
    },
  },
})

export const { changeHeight } = boxSlice.actions
export default boxSlice.reducer