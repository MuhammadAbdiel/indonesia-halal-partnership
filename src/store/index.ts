import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import kafas from "./kafas/kafasSlice";

export const store = configureStore({
  reducer: {
    auth,
    kafas,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
