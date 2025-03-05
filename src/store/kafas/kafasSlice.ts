import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllKafas } from './kafasAction'

interface IInitialState {
  isRefresh: boolean
}

const initialState: IInitialState = {
  isRefresh: false
}

export const kafasSlice = createSlice({
  name: 'kafas',
  initialState,
  reducers: {
    setIsRefresh: (state, action: PayloadAction<boolean>) => {
      state.isRefresh = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getAllKafas.fulfilled, (state, _action) => {
      state.isRefresh = true
    })
    builder.addCase(getAllKafas.rejected, (state, _action) => {
      state.isRefresh = true
    })
  }
})

export const { setIsRefresh } = kafasSlice.actions

export default kafasSlice.reducer
