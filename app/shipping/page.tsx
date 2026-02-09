'use client'

import { RoleGuard } from '@/components/role-guard'
import { Card } from '@/components/ui/card'

import { Package, Truck, CheckCircle2, Clock } from 'lucide-react'
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

const shipments = [
  {
    id: 'SHIP-001',
    orderNo: '#ORD-001',
    status: 'Delivered',
    date: '2024-02-08',
    estimatedDate: '2024-02-08',
    items: ['Premium Leather Sofa'],
    carrier: 'FedEx',
    tracking: 'FX1234567890',
  },
  {
    id: 'SHIP-002',
    orderNo: '#ORD-002',
    status: 'In Transit',
    date: '2024-02-05',
    estimatedDate: '2024-02-10',
    items: ['Modern Coffee Table', 'Designer Floor Lamp'],
    carrier: 'UPS',
    tracking: 'UP9876543210',
  },
  {
    id: 'SHIP-003',
    orderNo: '#ORD-003',
    status: 'Processing',
    date: '2024-02-01',
    estimatedDate: '2024-02-07',
    items: ['Elegant Wall Art'],
    carrier: 'DHL',
    tracking: 'DL5678901234',
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Delivered':
      return <CheckCircle2 size={20} className="text-green-500" />
    case 'In Transit':
      return <Truck size={20} className="text-blue-500" />
    case 'Processing':
      return <Clock size={20} className="text-yellow-500" />
    default:
      return <Package size={20} className="text-gray-500" />
  }
}

export default function ShippingPage() {
  return (
    <RoleGuard requiredRole="end-user">
      <HeaderComponent />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Track Shipments</h1>
            <p className="text-muted-foreground mt-2">Monitor your orders in real-time</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {shipments.map((shipment) => (
              <Card key={shipment.id} className="bg-card border border-border p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{shipment.orderNo}</h2>
                    <p className="text-sm text-muted-foreground">
                      Tracking: {shipment.tracking}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(shipment.status)}
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        shipment.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : shipment.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Items</p>
                    <ul className="space-y-1">
                      {shipment.items.map((item, idx) => (
                        <li key={idx} className="text-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Shipped Date</p>
                    <p className="font-semibold text-foreground">{shipment.date}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Estimated Delivery</p>
                    <p className="font-semibold text-foreground">{shipment.estimatedDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Carrier</p>
                    <p className="font-semibold text-foreground">{shipment.carrier}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-semibold text-foreground">{shipment.status}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </RoleGuard>
  )
}
