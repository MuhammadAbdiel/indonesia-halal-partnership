import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/api'

export const getAllUser = createAsyncThunk('users/getAll', async (params: any, { rejectWithValue }) => {
  try {
    const response = await api.get(`/users`, { params })

    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})