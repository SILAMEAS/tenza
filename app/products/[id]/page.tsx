'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/store'
// import { addItem } from '@/lib/slices/cartSlice'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Star, ChevronRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'

const mockProducts: Record<
  string,
  {
    id: string
    name: string
    price: number
    image: string
    rating: number
    reviews: number
    description: string
    longDescription: string
    inStock: boolean
    features: string[]
    specifications: { label: string; value: string }[]
  }
> = {
  '1': {
    id: '1',
    name: 'Premium Leather Sofa',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 128,
    description: 'Luxurious leather sofa with adjustable headrest',
    longDescription:
      'Experience ultimate comfort with our premium leather sofa. Crafted from genuine Italian leather, this sofa features an adjustable headrest, deep seating, and sturdy wooden frame. Perfect for modern and classic interiors alike.',
    inStock: true,
    features: [
      'Genuine Italian leather',
      'Adjustable headrest',
      'Deep seating comfort',
      'Wooden frame construction',
      '10-year warranty',
    ],
    specifications: [
      { label: 'Material', value: 'Genuine Leather' },
      { label: 'Dimensions', value: '220cm W x 100cm D x 90cm H' },
      { label: 'Weight', value: '180kg' },
      { label: 'Color', value: 'Black, Brown, Grey' },
      { label: 'Warranty', value: '10 Years' },
    ],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = mockProducts[productId] || mockProducts['1']
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">
                Products
              </Link>
              <ChevronRight size={16} />
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg bg-secondary"
              />
              <div className="grid grid-cols-4 gap-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={product.image || "/placeholder.svg"}
                    alt={`View ${i}`}
                    className="w-full h-24 object-cover rounded-lg bg-secondary cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-4xl font-bold text-accent">${product.price}</p>
              </div>

              <p className="text-muted-foreground text-lg">{product.description}</p>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-background rounded transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 font-semibold text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-background rounded transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <Button
                    // onClick={() =>
                    //   dispatch(
                    //     addItem({
                    //       id: product.id,
                    //       name: product.name,
                    //       price: product.price,
                    //       quantity,
                    //     })
                    //   )
                    // }
                    disabled={!product.inStock}
                    className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-6"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>

                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-3 rounded-lg hover:bg-secondary transition-colors border border-border"
                  >
                    <Heart
                      size={24}
                      className={
                        isWishlisted ? 'fill-accent text-accent' : 'text-foreground'
                      }
                    />
                  </button>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Free shipping on orders over $100</p>
                  <p>✓ 30-day money-back guarantee</p>
                  <p>✓ Secure checkout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <Card className="bg-card border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Specifications */}
            <Card className="bg-card border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Specifications</h2>
              <div className="space-y-3">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt="Related"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-foreground">Related Product {i}</h3>
                    <p className="text-sm text-muted-foreground">$999</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
