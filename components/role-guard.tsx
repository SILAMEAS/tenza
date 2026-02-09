'use client'

import { ReactNode } from 'react'
import { useAppSelector } from '@/lib/store'
import { UserRole } from '@/lib/slices/authSlice'
import Link from 'next/link'

interface RoleGuardProps {
  children: ReactNode
  requiredRole: UserRole | UserRole[]
  fallback?: ReactNode
}

export function RoleGuard({ children, requiredRole, fallback }: RoleGuardProps) {
  const user = useAppSelector((state) => state.auth.user)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated || !user) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Access Denied</h1>
            <p className="text-muted-foreground">Please log in to access this page.</p>
            <Link href="/login" className="text-accent hover:underline font-semibold">
              Go to Login
            </Link>
          </div>
        </div>
      )
    )
  }

  const rolesArray = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
  const hasAccess = user.role === 'super-admin' || rolesArray.includes(user.role)

  if (!hasAccess) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Unauthorized</h1>
            <p className="text-muted-foreground">
              You don't have permission to access this page.
            </p>
            <Link href="/" className="text-accent hover:underline font-semibold">
              Go Home
            </Link>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
