'use client'

import { RoleGuard } from '@/components/role-guard'
import { useAppSelector } from '@/lib/store'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Package, ShoppingBag, TrendingUp, Settings, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function OwnerPage() {
  const user = useAppSelector((state) => state.auth.user)

  const stats = [
    { label: 'Total Products', value: '156', icon: Package, change: '+8' },
    { label: 'Total Orders', value: '1,234', icon: ShoppingBag, change: '+45' },
    { label: 'Revenue', value: '$45,230', icon: TrendingUp, change: '+15%' },
  ]

  const ownerLinks = [
    { label: 'Products', href: '/owner/products', description: 'Add, edit, and delete your products', icon: Package },
    { label: 'Orders', href: '/owner/orders', description: 'Manage customer orders', icon: ShoppingBag },
    { label: 'Analytics', href: '/owner/analytics', description: 'View your store analytics', icon: TrendingUp },
    { label: 'Settings', href: '/owner/settings', description: 'Store settings and configuration', icon: Settings },
  ]

  return (
    <RoleGuard requiredRole="owner">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Store Dashboard</h1>
                <p className="text-muted-foreground">
                  {user?.companyName} - Manage your store and products
                </p>
              </div>
              <Link href="/owner/products/new">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Plus size={18} className="mr-2" />
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          {/* Owner Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ownerLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link key={index} href={link.href}>
                  <Card className="p-6 bg-card border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer h-full">
                    <Icon size={24} className="text-accent mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{link.label}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </RoleGuard>
  )
}
