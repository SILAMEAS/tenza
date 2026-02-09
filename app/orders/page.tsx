'use client'

import { RoleGuard } from '@/components/role-guard'
import { Card } from '@/components/ui/card'

export default function OrdersPage() {
  const orders = [
    { id: '#ORD-001', date: '2024-02-08', status: 'Delivered', total: '$234.99', items: 3 },
    { id: '#ORD-002', date: '2024-02-05', status: 'In Transit', total: '$156.50', items: 2 },
    { id: '#ORD-003', date: '2024-02-01', status: 'Processing', total: '$89.99', items: 1 },
  ]

  return (
    <RoleGuard requiredRole={['end-user', 'owner']}>
      <div className="min-h-screen bg-background">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Your Orders</h1>
            <p className="text-muted-foreground mt-2">View and track your orders</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="bg-card border border-border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground text-lg">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                    <p className="text-sm text-muted-foreground">{order.items} items</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-semibold px-4 py-2 rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="font-semibold text-foreground text-lg">{order.total}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </RoleGuard>
  )
}
