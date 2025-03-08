import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllKafas, getKafasById } from './kafasAction'

interface IInitialState {
  isRefresh: boolean
  isDetailRefresh: boolean
}

const initialState: IInitialState = {
  isRefresh: false,
  isDetailRefresh: false
}

export const kafasSlice = createSlice({
  name: 'kafas',
  initialState,
  reducers: {
    setIsRefresh: (state, action: PayloadAction<boolean>) => {
      state.isRefresh = action.payload
    },
    setIsDetailRefresh: (state, action: PayloadAction<boolean>) => {
      state.isDetailRefresh = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getAllKafas.fulfilled, (state, _action) => {
      state.isRefresh = true
    })
    builder.addCase(getAllKafas.rejected, (state, _action) => {
      state.isRefresh = true
    })
    builder.addCase(getKafasById.fulfilled, (state, _action) => {
      state.isDetailRefresh = true
    })
    builder.addCase(getKafasById.rejected, (state, _action) => {
      state.isDetailRefresh = true
    })
  }
})

export const { setIsRefresh, setIsDetailRefresh } = kafasSlice.actions

export default kafasSlice.reducer
