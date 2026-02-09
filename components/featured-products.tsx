'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useAppDispatch } from '@/lib/store'
import { addToCart } from '@/lib/slices/cartSlice'
import { useGetProductsQuery } from '@/lib/api/productsApi'

export default function FeaturedProducts() {
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()
  const [wishlist, setWishlist] = useState<string[]>([])
  const { data: products = [] } = useGetProductsQuery({})

  const mockProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      image: '/products/headphones.jpg',
      rating: 4.8,
      reviews: 245,
    },
    {
      id: '2',
      name: 'Stainless Steel Watch',
      price: 199.99,
      image: '/products/watch.jpg',
      rating: 4.6,
      reviews: 189,
    },
    {
      id: '3',
      name: 'Leather Messenger Bag',
      price: 149.99,
      image: '/products/bag.jpg',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: '4',
      name: 'Smart Fitness Band',
      price: 129.99,
      image: '/products/fitness.jpg',
      rating: 4.5,
      reviews: 312,
    },
  ]

  const displayProducts = products.length > 0 ? products : mockProducts

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const handleAddToCart = (product: (typeof displayProducts)[0]) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      }),
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t('products.featured')}
        </h2>
        <p className="text-muted-foreground">
          Handpicked collection of our best-selling items
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-secondary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
              <div className="flex items-center justify-center h-full text-6xl">
                📦
              </div>

              {/* Quick Actions */}
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 rounded-full transition-all ${
                    wishlist.includes(product.id)
                      ? 'bg-accent text-white'
                      : 'bg-white/80 hover:bg-white text-foreground'
                  }`}
                >
                  <Heart
                    size={18}
                    fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">
                  ({product.reviews} {t('products.reviews')})
                </span>
              </div>

              {/* Price */}
              <p className="text-lg font-bold text-accent mb-4">
                ${product.price.toFixed(2)}
              </p>

              {/* Add to Cart Button */}
              <Button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} />
                {t('products.addToCart')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
