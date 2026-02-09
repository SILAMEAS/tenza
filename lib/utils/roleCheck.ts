import { UserRole } from '@/lib/slices/authSlice'

export const hasRole = (userRole: UserRole | null, requiredRole: UserRole | UserRole[]): boolean => {
  if (!userRole) return false

  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole)
  }

  // Super-admin has access to everything
  if (userRole === 'super-admin') return true

  return userRole === requiredRole
}

export const canAccessRoute = (userRole: UserRole | null, route: string): boolean => {
  if (!userRole) {
    // Allow access to public routes
    return ['/', '/login', '/products'].includes(route)
  }

  // Super-admin can access everything
  if (userRole === 'super-admin') return true

  // Route-based access control
  const roleAccess: Record<string, UserRole[]> = {
    '/dashboard': ['end-user', 'owner', 'super-admin'],
    '/admin': ['super-admin'],
    '/owner': ['owner', 'super-admin'],
    '/cart': ['end-user', 'owner', 'super-admin'],
    '/checkout': ['end-user', 'owner', 'super-admin'],
    '/orders': ['end-user', 'owner', 'super-admin'],
  }

  // Check if the route requires authentication
  const requiredRoles = roleAccess[route]
  if (!requiredRoles) return true // Public route

  return requiredRoles.includes(userRole)
}
