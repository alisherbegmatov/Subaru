import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../components/Car'

export const store = configureStore({
  reducer: {
    car: carReducer
  }
})
