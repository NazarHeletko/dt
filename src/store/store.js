import { configureStore } from '@reduxjs/toolkit'
import  generalSlice  from './generalSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    mobileMenu: generalSlice,
    user: userSlice
  },
})