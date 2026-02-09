'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-lg"
            >
              {t('hero.cta')} <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base font-medium border-2 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 md:h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl" />
          <div className="flex items-center justify-center h-full rounded-2xl bg-secondary">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-background mb-4">
                <span className="text-6xl">✨</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Premium Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
