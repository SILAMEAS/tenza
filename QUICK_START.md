# Quick Start Guide

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## First Time Setup

### Access the Application

**Home Page**: `http://localhost:3000`
- Public page with products and categories
- No authentication required

**Login Page**: `http://localhost:3000/login`
- Demo accounts available
- Password for all accounts: `password123`

## Demo Accounts

### Customer (End-User)
```
Email: user@example.com
Password: password123
Access: /dashboard, /orders, /wishlist, /settings
```

### Store Owner
```
Email: owner@example.com
Password: password123
Company: Premium Co.
Access: /owner (store management)
```

### Super Admin
```
Email: admin@example.com
Password: password123
Access: /admin (full platform control)
```

## Test the Features

### 1. Dark Mode
- Click the moon/sun icon in the header
- Watch the smooth transition between themes
- Works on all pages

### 2. Language Switching
- Click language selector (EN, ES, FR, DE)
- All content updates instantly
- Persists in your session

### 3. Role-Based Access
**Try as End-User:**
1. Login with `user@example.com`
2. Get redirected to `/dashboard`
3. Try accessing `/admin` → See "Unauthorized" error
4. Try accessing `/owner` → See "Unauthorized" error
5. Can access: Dashboard, Orders, Wishlist, Settings

**Try as Owner:**
1. Login with `owner@example.com`
2. Get redirected to `/owner`
3. Try accessing `/admin` → See "Unauthorized" error
4. Can access: Owner dashboard, Products, Orders, Analytics

**Try as Super Admin:**
1. Login with `admin@example.com`
2. Get redirected to `/admin`
3. Can access ALL pages and features
4. Can navigate to any role's dashboard

### 4. Logout & Session
1. Click your profile avatar in top right
2. Click "Logout"
3. Get redirected to home page
4. Authentication cleared

## Key Features Overview

### Shopping Experience (End-User)
- Browse products on home page
- Add items to cart
- View wishlist
- Track orders
- Manage account settings

### Store Management (Owner)
- Add/edit/delete products
- View store analytics
- Manage customer orders
- Update store settings

### Platform Control (Admin)
- Manage all users
- Control all products
- View all orders
- System settings and analytics

## File Locations

**Authentication**: `lib/slices/authSlice.ts`
- Mock users and login logic
- Modify here to change demo credentials

**Role Checking**: `lib/utils/roleCheck.ts`
- Access control logic
- Modify to change permission rules

**Protected Routes**: `components/role-guard.tsx`
- Component that enforces role protection
- Wrap pages with `<RoleGuard>` for protection

**Dashboard Pages**:
- `/app/dashboard/page.tsx` - End-user dashboard
- `/app/owner/page.tsx` - Owner dashboard
- `/app/admin/page.tsx` - Admin dashboard

## Customization

### Change Demo Password
Edit `lib/slices/authSlice.ts`:
```typescript
const mockUsers = {
  'user@example.com': {
    password: 'your-new-password',
    // ...
  },
}
```

### Add New Demo User
Edit `lib/slices/authSlice.ts`:
```typescript
const mockUsers = {
  'newuser@example.com': {
    id: '4',
    email: 'newuser@example.com',
    name: 'New User',
    role: 'end-user',
    password: 'password123',
  },
  // ... rest of users
}
```

### Modify Theme Colors
Edit `app/globals.css`:
```css
:root {
  --accent: 20 100% 50%; /* Change this to your preferred color */
  /* ... other colors */
}
```

### Add New Language
1. Create `public/locales/{lang}/common.json`
2. Copy structure from English translations
3. Update translations
4. Add to `i18n/config.ts` in `languages` array
5. Add to language selector in `components/header.tsx`

## Next Steps

1. Review `IMPLEMENTATION_GUIDE.md` for detailed architecture
2. Explore Redux store in `lib/store.ts`
3. Check role-based components in `components/`
4. Customize demo data as needed
5. When ready, replace mock data with real database/API

## Troubleshooting

### Theme not transitioning smoothly?
- Check `app/globals.css` for transition styles
- Ensure `suppressHydrationWarning` is in `html` tag in `app/layout.tsx`

### Login not working?
- Verify email matches exactly (case-sensitive)
- Password is `password123` for all demo accounts
- Check browser console for errors

### Can't access protected pages?
- Ensure you're logged in
- Check your user role matches the required role
- Use `/login` to switch accounts

### Language not changing?
- Check `public/locales/` folder has the language file
- Verify language key in `i18n/config.ts`
- Check browser console for i18n warnings

## Support

For more detailed information, see:
- `IMPLEMENTATION_GUIDE.md` - Full architecture documentation
- Component source files - Detailed code comments
- React docs - https://react.dev
- Next.js docs - https://nextjs.org
- Redux docs - https://redux.js.org
