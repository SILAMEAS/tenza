'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import FeaturedProducts from '@/components/featured-products'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  )
}
