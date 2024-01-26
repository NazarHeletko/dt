import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserPageOpen: false,
}

export const userlSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserPageOpen: (state) => {
      state.isUserPageOpen = true
    },
    setUserPageClose: (state) => {
      state.isUserPageOpen = false
    }
  },
})


export const { setUserPageOpen, setUserPageClose } = userlSlice.actions

export default userlSlice.reducer