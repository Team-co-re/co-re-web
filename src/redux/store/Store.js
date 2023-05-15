import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from '../slices/loginModalSlice';

export const store = configureStore({
    reducer: {
        loginModal: loginReducer,
    },
    
    middleware: getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})