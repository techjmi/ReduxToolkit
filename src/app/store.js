import { configureStore } from '@reduxjs/toolkit'
import todReducer from "../feature/todo/todoSlice"
export const store = configureStore({
  reducer: todReducer,
})