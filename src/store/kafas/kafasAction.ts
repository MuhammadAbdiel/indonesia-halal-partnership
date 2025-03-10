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

export const getKafasByUserId = createAsyncThunk('kafas/getByUserId', async (id: string, { rejectWithValue }) => {
  try {
    const response = await api.get(`/kafas/user/${id}`)

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

export const updateKafas = createAsyncThunk('kafas/update', async ({ id, data }: { id: string, data: any }, { rejectWithValue }) => {
  try {
    const response = await api.put(`/kafas/${id}`, data)

    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const deleteKafas = createAsyncThunk('kafas/delete', async ({ id }: { id: string }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/kafas/${id}`)

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

export const deleteAssignKafasToUser = createAsyncThunk('kafas/deleteAssignToUser', async ({ id }: { id: string }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/kafas/assign/${id}`)

    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
