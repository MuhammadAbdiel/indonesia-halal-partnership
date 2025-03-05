import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/api'

export const getAllKafas = createAsyncThunk('kafas/getAll', async (params: any, { rejectWithValue }) => {
  try {
    const response = await api.get(`/kafas`, { params })

    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getKafasById = createAsyncThunk('kafas/getById', async (id: string, { rejectWithValue }) => {
  try {
    const response = await api.get(`/kafas/${id}`)
    
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const createKafas = createAsyncThunk('kafas/create', async ({ data }: any, { rejectWithValue }) => {
  try {
    const response = await api.post('/kafas', data)

    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const assignKafasToUser = createAsyncThunk('kafas/assignToUser', async ({ data }: any, { rejectWithValue }) => {
  try {
    const response = await api.post(`/kafas/assign`, data)
    
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
