'use client'

import { RoleGuard } from '@/components/role-guard'
import { useAppSelector } from '@/lib/store'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { BarChart3, Users, Package, Settings, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminPage() {
  const user = useAppSelector((state) => state.auth.user)

  const stats = [
    { label: 'Total Users', value: '12,345', icon: Users, change: '+12%' },
    { label: 'Products', value: '856', icon: Package, change: '+5%' },
    { label: 'Revenue', value: '$124,530', icon: TrendingUp, change: '+23%' },
    { label: 'Orders', value: '2,847', icon: BarChart3, change: '+18%' },
  ]

  const adminLinks = [
    { label: 'User Management', href: '/admin/users', description: 'Manage all users and roles' },
    { label: 'Product Management', href: '/admin/products', description: 'Control all products' },
    { label: 'Order Management', href: '/admin/orders', description: 'View and manage orders' },
    { label: 'Store Owners', href: '/admin/owners', description: 'Manage store owners' },
    { label: 'Settings', href: '/admin/settings', description: 'System settings' },
    { label: 'Analytics', href: '/admin/analytics', description: 'View system analytics' },
  ]

  return (
    <RoleGuard requiredRole="super-admin">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Super Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}! Complete control over the entire platform.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="p-6 bg-card border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-green-500">{stat.change}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </Card>
              )
            })}
          </div>

          {/* Admin Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="p-6 bg-card border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer h-full">
                  <Settings size={24} className="text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{link.label}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </RoleGuard>
  )
}
