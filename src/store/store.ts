import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { personajesSlice } from "../slices";

const rootReducer = combineReducers({
  personajes: personajesSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;