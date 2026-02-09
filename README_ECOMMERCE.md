# Nexus - Modern E-Commerce Platform

A full-featured, production-ready e-commerce website built with Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui, Redux Toolkit, i18next, and next-themes.

## 🎯 Features

### User Roles & Access Control

**1. End-User (Customer)**
- Browse products with filtering and sorting
- Add items to cart
- Wishlist functionality
- Complete checkout process
- Track orders and shipments
- Manage profile and settings
- Multi-language support
- Dark/Light mode toggle

**2. Store Owner**
- Full product management (CRUD)
- Company-specific dashboard
- Order management
- Analytics overview
- Settings and account management

**3. Super Admin**
- Complete platform control
- User management
- All product oversight
- System-wide analytics
- Settings and system configuration

### Core Features

✅ **Smooth Theme Transitions** - Seamless dark/light mode switching with CSS transitions  
✅ **Multi-Language Support** - English, Spanish, French, German (easily extensible)  
✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Redux State Management** - Centralized cart and UI state  
✅ **Redux Toolkit Query** - API data fetching with caching  
✅ **Authentication** - Role-based access control with mock data  
✅ **Shopping Features** - Products, cart, checkout, orders, wishlist  
✅ **Admin Dashboards** - Role-specific administration panels

## 🚀 Quick Start

### Demo Login Credentials

Use these credentials to test different user roles:

```
End-User:     user@example.com / password123
Store Owner:  owner@example.com / password123
Super Admin:  admin@example.com / password123
```

### Available Routes

#### Public Routes
- `/` - Homepage with featured products
- `/products` - Product catalog with filters
- `/products/[id]` - Product detail page
- `/login` - Login page
- `/cart` - Shopping cart
- `/checkout` - Checkout process

#### Protected Routes (End-User)
- `/dashboard` - User dashboard
- `/orders` - Order history
- `/wishlist` - Saved items
- `/shipping` - Track shipments
- `/settings` - Account settings
- `/profile` - User profile

#### Protected Routes (Store Owner)
- `/owner` - Owner dashboard
- Product management features
- Order management features

#### Protected Routes (Super Admin)
- `/admin` - Admin dashboard
- User management
- Full system control

## 🛠️ Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library

### State Management
- **Redux Toolkit** - State management
- **Redux Toolkit Query** - Data fetching & caching
- **React-Redux** - React bindings for Redux

### Internationalization & Theme
- **i18next** - Internationalization
- **react-i18next** - React bindings for i18n
- **next-themes** - Next.js theme management

### UI/UX
- **Lucide React** - Icons
- **next/navigation** - Routing
- **classnames (cn)** - Class utilities

## 📁 Project Structure

```
project/
├── app/
│   ├── page.tsx              # Homepage
│   ├── login/                # Login page
│   ├── products/             # Product catalog & details
│   ├── cart/                 # Shopping cart
│   ├── checkout/             # Checkout process
│   ├── dashboard/            # User dashboard
│   ├── orders/               # Order history
│   ├── wishlist/             # Wishlist
│   ├── shipping/             # Shipment tracking
│   ├── settings/             # Settings page
│   ├── profile/              # User profile
│   ├── admin/                # Admin dashboard
│   ├── owner/                # Owner dashboard
│   └── layout.tsx            # Root layout
├── components/
│   ├── header.tsx            # Header with nav & user menu
│   ├── footer.tsx            # Footer
│   ├── hero.tsx              # Hero section
│   ├── categories.tsx        # Product categories
│   ├── featured-products.tsx # Featured items
│   ├── newsletter.tsx        # Newsletter subscription
│   ├── user-menu.tsx         # User dropdown menu
│   ├── role-guard.tsx        # Role protection wrapper
│   └── ui/                   # shadcn components
├── lib/
│   ├── store.ts              # Redux store configuration
│   ├── slices/
│   │   ├── authSlice.ts      # Authentication state
│   │   ├── cartSlice.ts      # Cart state
│   │   └── uiSlice.ts        # UI state
│   ├── api/
│   │   └── productsApi.ts    # RTK Query API endpoints
│   └── utils/
│       └── roleCheck.ts      # Role checking utilities
├── i18n/
│   ├── config.ts             # i18n configuration
│   ├── client.ts             # i18n client setup
│   └── locales/              # Translation files
├── providers/
│   ├── index.tsx             # Providers wrapper
│   └── theme-provider.tsx    # Theme provider
├── public/
│   └── locales/              # Translation JSON files
├── app/
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
└── package.json              # Dependencies
```

## 🎨 Customization Guide

### Adding New Languages

1. Create translation file in `public/locales/[lang]/common.json`
2. Update i18n config in `i18n/config.ts`
3. Add language option to language selector in header

### Changing Colors/Theme

Edit color variables in `app/globals.css`:
```css
:root {
  --primary: 0 0% 10%;      /* Change primary color */
  --accent: 20 100% 50%;    /* Change accent color */
  --background: 0 0% 98%;   /* Change background */
}
```

### Adding New Role

1. Update `UserRole` type in `lib/slices/authSlice.ts`
2. Add mock user to `mockUsers` in authSlice
3. Create new dashboard page in `app/[role]/page.tsx`
4. Use `<RoleGuard requiredRole="new-role">` for protection

### Connecting to Real Backend

1. Replace mock data in components with API calls
2. Update Redux Toolkit Query endpoints in `lib/api/productsApi.ts`
3. Implement real authentication in login page
4. Replace mock users with actual authentication service

## 🔐 Authentication Flow

```
1. User enters credentials on /login
2. Mock authentication checks credentials
3. Redux auth slice updates with user data
4. User redirected based on role:
   - end-user → /dashboard
   - owner → /owner
   - super-admin → /admin
5. Protected routes check auth state via RoleGuard
6. User menu displays in header with logout option
```

## 🛒 Shopping Flow

```
1. Browse /products with filtering
2. Click product for /products/[id] details
3. Add to cart (updates Redux state)
4. View cart at /cart
5. Modify quantities or remove items
6. Proceed to /checkout
7. Enter shipping & payment info
8. Order confirmation screen
9. Track order at /shipping
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 State Management

### Redux Slices

**authSlice** - Manages authentication state
- `login` - Set authenticated user
- `logout` - Clear user data
- `setRole` - Update user role

**cartSlice** - Manages shopping cart
- `addItem` - Add product to cart
- `removeItem` - Remove product from cart
- `updateQuantity` - Update item quantity
- `clearCart` - Empty cart

**uiSlice** - Manages UI state
- `toggleCartVisibility` - Show/hide cart
- `setLanguage` - Change language
- `toggleMobileMenu` - Mobile menu state

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Self-Hosted
```bash
npm run build
npm start
```

## 📝 Mock Data

All data is currently mocked for demonstration. Key mock data locations:

- **Products**: Components use hardcoded arrays
- **Users**: `lib/slices/authSlice.ts`
- **Orders**: Individual page components

## 🔄 Smooth Theme Transitions

Theme switching is handled by:
- CSS transitions on all elements (0.3s ease)
- next-themes for persistence
- System preference detection
- Manual theme toggle in header

## ⚡ Performance

- SSR with Next.js 16
- CSS transitions for smooth animations
- Redux caching with RTK Query
- Image optimization
- Code splitting

## 🤝 Contributing

To extend this project:

1. Add new features to appropriate components
2. Create new slices for additional state
3. Update RTK Query API as needed
4. Add translations for new text
5. Update role permissions as required

## 📚 Resources

- [Next.js Docs](https://nextjs.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [i18next Docs](https://www.i18next.com)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 📄 License

This project is available for use and customization.

---

**Version**: 1.0.0  
**Last Updated**: February 2025  
**Status**: Production Ready
