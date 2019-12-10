import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterModule = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export default counterModule
