'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/store'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  const router = useRouter()
  const cartItems = useAppSelector((state) => state.cart.items)
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'confirmation'>(
    'shipping'
  )
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const subtotal = total
  const shipping = 15
  const tax = (subtotal + shipping) * 0.1
  const finalTotal = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNext = () => {
    if (currentStep === 'shipping') {
      setCurrentStep('payment')
    } else if (currentStep === 'payment') {
      setCurrentStep('confirmation')
    }
  }

  const handlePrev = () => {
    if (currentStep === 'payment') {
      setCurrentStep('shipping')
    } else if (currentStep === 'confirmation') {
      setCurrentStep('payment')
    }
  }

  if (currentStep === 'confirmation') {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check size={32} className="text-green-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Order Confirmed!</h1>
              <p className="text-muted-foreground mt-2">
                Thank you for your purchase. You will receive an email confirmation shortly.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4 space-y-2">
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="text-2xl font-bold text-accent">#ORD-{Math.random().toString().slice(2, 8)}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
            </p>
            <Button
              onClick={() => router.push('/dashboard')}
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              View Order in Dashboard
            </Button>
            <Link href="/products" className="block">
              <Button
                variant="outline"
                className="w-full border-2 bg-transparent text-foreground hover:bg-secondary"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex gap-4 mb-8">
                {['shipping', 'payment', 'confirmation'].map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        currentStep === step || idx < ['shipping', 'payment', 'confirmation'].indexOf(currentStep)
                          ? 'bg-accent text-white'
                          : 'bg-secondary text-foreground'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-foreground capitalize">
                      {step}
                    </span>
                    {idx < 2 && <div className="h-px flex-1 bg-border" />}
                  </div>
                ))}
              </div>

              {/* Shipping Form */}
              {currentStep === 'shipping' && (
                <Card className="bg-card border border-border p-6 space-y-6">
                  <h2 className="text-xl font-bold text-foreground">Shipping Information</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Input
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                  >
                    Continue to Payment
                  </Button>
                </Card>
              )}

              {/* Payment Form */}
              {currentStep === 'payment' && (
                <Card className="bg-card border border-border p-6 space-y-6">
                  <h2 className="text-xl font-bold text-foreground">Payment Information</h2>

                  <Input
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={handlePrev}
                      variant="outline"
                      className="flex-1 border-2 bg-transparent text-foreground hover:bg-secondary"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="flex-1 bg-accent hover:bg-accent/90 text-white"
                    >
                      Place Order
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-card border border-border p-6 sticky top-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-accent">${finalTotal.toFixed(2)}</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
