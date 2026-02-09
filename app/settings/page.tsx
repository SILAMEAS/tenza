'use client'

import { RoleGuard } from '@/components/role-guard'
import { useAppSelector } from '@/lib/store'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Lock, Bell, Shield } from 'lucide-react'

export default function SettingsPage() {
  const user = useAppSelector((state) => state.auth.user)

  const settingsSections = [
    {
      icon: User,
      title: 'Account Information',
      description: 'Update your personal details',
      fields: [
        { label: 'Full Name', value: user?.name },
        { label: 'Email', value: user?.email },
        { label: 'Role', value: user?.role.charAt(0).toUpperCase() + user?.role.slice(1) },
      ],
    },
    {
      icon: Lock,
      title: 'Password & Security',
      description: 'Manage your password and security settings',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage notification preferences',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Control your privacy settings',
    },
  ]

  return (
    <RoleGuard requiredRole={['end-user', 'owner', 'super-admin']}>
      <div className="min-h-screen bg-background">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-2">Manage your account preferences</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {settingsSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="bg-card border border-border p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  {section.fields && (
                    <div className="space-y-4">
                      {section.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex}>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {field.label}
                          </label>
                          <Input
                            type="text"
                            value={field.value}
                            disabled
                            className="bg-secondary/50 cursor-not-allowed"
                          />
                        </div>
                      ))}
                      <Button className="mt-4 bg-accent hover:bg-accent/90 text-white">
                        Update Information
                      </Button>
                    </div>
                  )}

                  {!section.fields && (
                    <Button variant="outline" className="w-full bg-transparent">
                      Configure
                    </Button>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </RoleGuard>
  )
}
