import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllUser } from './userAction'
interface IInitialState {
  isRefresh: boolean
}

const initialState: IInitialState = {
  isRefresh: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsRefresh: (state, action: PayloadAction<boolean>) => {
      state.isRefresh = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getAllUser.fulfilled, (state, _action) => {
      state.isRefresh = true
    })
    builder.addCase(getAllUser.rejected, (state, _action) => {
      state.isRefresh = true
    })
  }
})

export const { setIsRefresh } = usersSlice.actions

export default usersSlice.reducer
