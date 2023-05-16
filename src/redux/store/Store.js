import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from '../slices/loginModalSlice';
import headerProcessReducer from '../slices/headerProcessSlice';
import chatSlice from "../slices/chatSlice";

export const store = configureStore({
  reducer: {
    loginModal: loginReducer,
    process: headerProcessReducer,
    chat: chatSlice.reducer,
  },

  middleware: getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});