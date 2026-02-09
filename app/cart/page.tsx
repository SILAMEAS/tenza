'use client'

import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, ShoppingCart } from 'lucide-react'
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'
import { updateQuantity } from '@/lib/slices/cartSlice'

export default function CartPage() {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <>
        <HeaderComponent />
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <ShoppingCart size={64} className="text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your cart is empty</h1>
              <p className="text-muted-foreground mt-2">Start shopping to add items to your cart</p>
            </div>
            <Link href="/products">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <FooterComponent />
      </>
    )
  }

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground mt-2">{cartItems.length} items</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border p-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-background rounded-lg p-1">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: Math.max(1, item.quantity - 1),
                              })
                            )
                          }
                          className="px-2 py-1 hover:bg-secondary rounded"
                        >
                          -
                        </button>
                        <span className="px-3 font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                          className="px-2 py-1 hover:bg-secondary rounded"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-semibold text-foreground w-20 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 size={20} className="text-destructive" />
                      </button>
                    </div>
                  </div>
                ))}
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-card border border-border p-6 sticky top-8 space-y-4">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-2 border-b border-border pb-4">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (10%)</span>
                    <span>${((total + 15) * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold text-foreground pt-4">
                  <span>Total</span>
                  <span className="text-accent">${(total + 15 + (total + 15) * 0.1).toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="block w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link href="/products" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full border-2 bg-transparent text-foreground hover:bg-secondary"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}
