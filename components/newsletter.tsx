'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const { t } = useTranslation('common')

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-accent rounded-2xl overflow-hidden">
        <div className="px-6 md:px-12 py-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
            <Mail size={24} className="text-white" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('newsletter.title')}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-balance">
              {t('newsletter.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.email')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
            <Button className="bg-white text-accent hover:bg-white/90 font-semibold h-12 px-6 whitespace-nowrap">
              {t('newsletter.subscribe')}
            </Button>
          </div>

          <p className="text-xs text-white/60">
            No spam, just great deals and inspiration. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
