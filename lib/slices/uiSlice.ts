import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isCartOpen: boolean
  isMobileMenuOpen: boolean
  language: 'en' | 'es' | 'fr' | 'de'
}

const initialState: UIState = {
  isCartOpen: false,
  isMobileMenuOpen: false,
  language: 'en',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
    setLanguage: (state, action: PayloadAction<'en' | 'es' | 'fr' | 'de'>) => {
      state.language = action.payload
    },
  },
})

export const {
  toggleCart,
  setCartOpen,
  toggleMobileMenu,
  setMobileMenu,
  setLanguage,
} = uiSlice.actions
export default uiSlice.reducer
