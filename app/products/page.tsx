'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/store'
// import { addItem } from '@/lib/slices/cartSlice'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'

const mockProducts = [
  {
    id: '1',
    name: 'Premium Leather Sofa',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 128,
    description: 'Luxurious leather sofa with adjustable headrest',
    inStock: true,
  },
  {
    id: '2',
    name: 'Modern Coffee Table',
    price: 599,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 89,
    description: 'Minimalist coffee table in walnut finish',
    inStock: true,
  },
  {
    id: '3',
    name: 'Designer Floor Lamp',
    price: 349,
    image: 'https://images.unsplash.com/photo-1565636192335-14a0cd97ae4e?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 45,
    description: 'Contemporary floor lamp with LED technology',
    inStock: true,
  },
  {
    id: '4',
    name: 'Elegant Wall Art',
    price: 189,
    image: 'https://images.unsplash.com/photo-1578321255856-2c77da14b81c?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 67,
    description: 'Abstract canvas wall art set of 3',
    inStock: true,
  },
  {
    id: '5',
    name: 'Comfortable Armchair',
    price: 899,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 156,
    description: 'Ergonomic armchair with cushioned support',
    inStock: true,
  },
  {
    id: '6',
    name: 'Bookshelf Unit',
    price: 749,
    image: 'https://images.unsplash.com/photo-1524634126442-357e0eac6b14?w=500&h=500&fit=crop',
    rating: 4.4,
    reviews: 78,
    description: 'Modular bookshelf with adjustable shelves',
    inStock: false,
  },
  {
    id: '7',
    name: 'Dining Table Set',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1551632786-bd91c42f05b1?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 92,
    description: 'Complete dining set for 6 people',
    inStock: true,
  },
  {
    id: '8',
    name: 'Mirror Cabinet',
    price: 429,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 34,
    description: 'Bathroom mirror cabinet with storage',
    inStock: true,
  },
]

export default function ProductsPage() {
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()
  const [wishlist, setWishlist] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [filterPrice, setFilterPrice] = useState(5000)

  const filteredProducts = mockProducts
    .filter((p) => p.price <= filterPrice)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Shop All Products</h1>
            <p className="text-muted-foreground mt-2">Discover our premium collection</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-4 bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Max Price: ${filterPrice}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={filterPrice}
                      onChange={(e) => setFilterPrice(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-lg transition-all bg-card border border-border"
                  >
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                      >
                        <Heart
                          size={20}
                          className={
                            wishlist.includes(product.id)
                              ? 'fill-accent text-accent'
                              : 'text-foreground'
                          }
                        />
                      </button>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <p className="text-white font-semibold">Out of Stock</p>
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-foreground hover:text-accent transition-colors">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">{product.description}</p>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-lg font-bold text-accent">${product.price}</p>
                        <Button
                          onClick={() =>
                            dispatch(
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                quantity: 1,
                              })
                            )
                          }
                          disabled={!product.inStock}
                          className="bg-accent hover:bg-accent/90 text-white"
                          size="sm"
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}
