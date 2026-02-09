'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { setLanguage } from '@/lib/slices/uiSlice'
import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const language = useAppSelector((state) => state.ui.language)

  const handleLanguageChange = (lang: 'en' | 'es' | 'fr' | 'de') => {
    i18n.changeLanguage(lang)
    dispatch(setLanguage(lang))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Nexus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-foreground hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="text-foreground hover:text-accent transition-colors"
            >
              Cart
            </Link>
            <Link
              href="/#categories"
              className="text-foreground hover:text-accent transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Search size={20} className="text-foreground" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                {useAppSelector((state) => state.cart.items.length) || 0}
              </span>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-foreground" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )}
            </button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm font-medium bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                  {language.toUpperCase()}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('de')}>
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <UserMenu />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            <Link
              href="/products"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Cart
            </Link>
            <Link
              href="/#categories"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}


