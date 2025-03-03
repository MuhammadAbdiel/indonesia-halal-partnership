import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

interface IInitialState {
  isRefresh: boolean;
}

const initialState: IInitialState = {
  isRefresh: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsRefresh: (_state, _action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (_state, {}) => {});
    builder.addCase(login.rejected, (_state) => {});
  },
});

export const { setIsRefresh } = authSlice.actions;

export default authSlice.reducer;
