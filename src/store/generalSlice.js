import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMobileMenuOpen: 'initial',
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = 'open'
    },
    setMobileMenuClose: (state) => {
      state.isMobileMenuOpen = 'close'
    }
  },
})


export const { setMobileMenuOpen, setMobileMenuClose } = generalSlice.actions

export default generalSlice.reducer