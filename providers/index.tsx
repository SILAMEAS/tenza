'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'
import { store } from '@/lib/store'
import i18n from '@/i18n/client'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  )
}
