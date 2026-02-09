'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Instagram, Facebook, Twitter, Dribbble } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-lg">Nexus</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium design solutions for modern living.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Instagram size={18} className="text-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Facebook size={18} className="text-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Twitter size={18} className="text-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Dribbble size={18} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.support')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold">{t('footer.address')}:</span>
                <br />
                123 Design Street, CA 90001
              </li>
              <li>
                <span className="font-semibold text-sm">{t('footer.phone')}:</span>
                <br />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="font-semibold text-sm">{t('footer.email')}:</span>
                <br />
                <a href="mailto:info@nexus.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  info@nexus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Nexus. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              {t('footer.terms')}
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


