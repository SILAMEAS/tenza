'use client'

import { RoleGuard } from '@/components/role-guard'
import { useAppSelector } from '@/lib/store'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ShoppingBag, Heart, Truck, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user)
  const cartItems = useAppSelector((state) => state.cart.items)

  const userLinks = [
    {
      label: 'My Orders',
      href: '/orders',
      description: 'View and track your orders',
      icon: ShoppingBag,
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
      description: 'Your saved items',
      icon: Heart,
    },
    {
      label: 'Shipping',
      href: '/shipping',
      description: 'Track shipments',
      icon: Truck,
    },
    {
      label: 'Settings',
      href: '/settings',
      description: 'Account preferences',
      icon: Settings,
    },
  ]

  const recentOrders = [
    { id: '#ORD-001', date: '2024-02-08', status: 'Delivered', total: '$234.99' },
    { id: '#ORD-002', date: '2024-02-05', status: 'In Transit', total: '$156.50' },
    { id: '#ORD-003', date: '2024-02-01', status: 'Processing', total: '$89.99' },
  ]

  return (
    <RoleGuard requiredRole="end-user">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground">Manage your account and orders</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Items in Cart</p>
              <p className="text-3xl font-bold text-accent">{cartItems.length}</p>
            </Card>
            <Card className="p-6 bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Recent Orders</p>
              <p className="text-3xl font-bold text-accent">3</p>
            </Card>
            <Card className="p-6 bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-3xl font-bold text-accent">$481.48</p>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {userLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link key={index} href={link.href}>
                  <Card className="p-6 bg-card border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer h-full">
                    <Icon size={24} className="text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{link.label}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Recent Orders */}
          <Card className="bg-card border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{order.total}</p>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/orders">
              <Button className="mt-6 w-full bg-accent hover:bg-accent/90 text-white">
                View All Orders
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </RoleGuard>
  )
}
