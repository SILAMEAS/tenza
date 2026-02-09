'use client'

import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'

const categories = [
  {
    id: 1,
    nameKey: 'categories.electronics',
    emoji: '📱',
    products: 1250,
  },
  {
    id: 2,
    nameKey: 'categories.fashion',
    emoji: '👗',
    products: 890,
  },
  {
    id: 3,
    nameKey: 'categories.accessories',
    emoji: '⌚',
    products: 456,
  },
]

export default function Categories() {
  const { t } = useTranslation('common')

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t('categories.title')}
        </h2>
        <p className="text-muted-foreground">
          Discover our carefully curated collections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="h-48 bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
              <span className="text-7xl">{category.emoji}</span>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                {t(category.nameKey)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.products} products
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
