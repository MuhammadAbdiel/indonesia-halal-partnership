import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ data }: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ data }: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/register", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async ({}: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/logout");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
