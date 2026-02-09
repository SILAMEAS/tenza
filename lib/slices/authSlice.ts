import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserRole = 'end-user' | 'owner' | 'super-admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  companyId?: string
  companyName?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
}

// Mock users for demo
const mockUsers = {
  'user@example.com': {
    id: '1',
    email: 'user@example.com',
    name: 'John Buyer',
    role: 'end-user' as UserRole,
    password: 'password123',
  },
  'owner@example.com': {
    id: '2',
    email: 'owner@example.com',
    name: 'Jane Owner',
    role: 'owner' as UserRole,
    companyId: 'comp-1',
    companyName: 'Premium Co.',
    password: 'password123',
  },
  'admin@example.com': {
    id: '3',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'super-admin' as UserRole,
    password: 'password123',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const mockUser = mockUsers[action.payload.email as keyof typeof mockUsers]
      if (mockUser && mockUser.password === action.payload.password) {
        state.user = {
          id: mockUser.id,
          email: mockUser.email,
          name: mockUser.name,
          role: mockUser.role,
          companyId: mockUser.companyId,
          companyName: mockUser.companyName,
        }
        state.isAuthenticated = true
      }
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
  },
})

export const { login, logout, setUser } = authSlice.actions
export default authSlice.reducer
