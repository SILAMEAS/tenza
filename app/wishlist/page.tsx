'use client'

import { RoleGuard } from '@/components/role-guard'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart } from 'lucide-react'

export default function WishlistPage() {
  const wishlistItems = [
    { id: 1, name: 'Premium Office Chair', price: '$299.99', rating: 4.8, image: '🪑' },
    { id: 2, name: 'Minimal Desk Lamp', price: '$89.99', rating: 4.6, image: '💡' },
    { id: 3, name: 'Designer Wall Clock', price: '$149.99', rating: 4.9, image: '⏰' },
  ]

  return (
    <RoleGuard requiredRole={['end-user', 'owner']}>
      <div className="min-h-screen bg-background">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
            <p className="text-muted-foreground mt-2">{wishlistItems.length} items saved</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-secondary flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-bold text-accent">{item.price}</p>
                    <p className="text-sm text-muted-foreground">⭐ {item.rating}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="px-3 bg-transparent">
                      <Heart size={16} className="text-accent" fill="currentColor" />
                    </Button>
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
