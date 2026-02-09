'use client'

import { useAppSelector } from '@/lib/store'
import { RoleGuard } from '@/components/role-guard'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Mail, Phone, MapPin, Save } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <RoleGuard requiredRole={['end-user', 'owner', 'super-admin']}>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
            <p className="text-muted-foreground mt-2">Manage your account information</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="bg-card border border-border p-8 space-y-8">
            {/* Profile Header */}
            <div className="flex items-center gap-6 pb-8 border-b border-border">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <User size={48} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{user?.name}</h2>
                <p className="text-muted-foreground capitalize">
                  {user?.role === 'super-admin' ? 'Super Admin' : user?.role === 'owner' ? 'Store Owner' : 'Customer'}
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary text-muted-foreground">
                    <Mail size={18} />
                    {user?.email}
                  </div>
                </div>

                {user?.companyName && (
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Company
                    </label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary text-muted-foreground">
                      {user?.companyName}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  defaultValue={user?.name}
                  className="bg-background border border-border"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Phone Number
                </label>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-background border border-border"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4 pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-foreground">Billing Address</h3>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Street Address
                </label>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your street address"
                    className="bg-background border border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder="City"
                  className="bg-background border border-border"
                />
                <Input
                  type="text"
                  placeholder="State"
                  className="bg-background border border-border"
                />
                <Input
                  type="text"
                  placeholder="ZIP Code"
                  className="bg-background border border-border"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-8 border-t border-border">
              <Button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white">
                <Save size={18} />
                Save Changes
              </Button>
              <Button
                variant="outline"
                className="border-2 bg-transparent text-foreground hover:bg-secondary"
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </RoleGuard>
  )
}
