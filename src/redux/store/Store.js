import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from '../slices/loginModalSlice';
import headerProcessReducer from '../slices/headerProcessSlice';
import loginReducers from "../slices/loginSlice";
import signReducer from "../slices/signSlice";
import commentReducer from "../slices/commentModalSlice";

export const store = configureStore({
  reducer: {
    loginModal: loginReducer,
    commentModal: commentReducer,
    process: headerProcessReducer,
    login: loginReducers,
    sign: signReducer,
  },

  middleware: getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});