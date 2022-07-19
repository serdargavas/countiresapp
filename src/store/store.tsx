import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from "../features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    
  }, middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})