'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/store'
import { login } from '@/lib/slices/authSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    // Mock users for demo
    const mockUsers: Record<string, { password: string; role: string }> = {
      'user@example.com': { password: 'password123', role: 'end-user' },
      'owner@example.com': { password: 'password123', role: 'owner' },
      'admin@example.com': { password: 'password123', role: 'super-admin' },
    }

    const user = mockUsers[email as keyof typeof mockUsers]
    if (!user || user.password !== password) {
      setError('Invalid email or password')
      return
    }

    dispatch(login({ email, password }))

    // Redirect based on role
    if (user.role === 'super-admin') {
      router.push('/admin')
    } else if (user.role === 'owner') {
      router.push('/owner')
    } else {
      router.push('/dashboard')
    }
  }

  const demoAccounts = [
    { email: 'user@example.com', role: 'End User', password: 'password123' },
    { email: 'owner@example.com', role: 'Owner', password: 'password123' },
    { email: 'admin@example.com', role: 'Super Admin', password: 'password123' },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-4">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Nexus</h1>
            <p className="text-muted-foreground mt-2">E-Commerce Platform</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Demo Accounts (Password: password123)
            </p>
            <div className="space-y-2">
              {demoAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => {
                    setEmail(account.email)
                    setPassword(account.password)
                  }}
                  className="w-full p-3 text-left text-sm rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground border border-border"
                >
                  <div className="font-semibold">{account.role}</div>
                  <div className="text-xs text-muted-foreground">{account.email}</div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Continue as{' '}
            <Link
              href="/"
              className="text-accent hover:underline font-semibold"
            >
              Guest
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
