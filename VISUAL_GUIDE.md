# Nexus E-Commerce - Visual Guide & Getting Started

## 🎬 Video Walkthrough (Text Version)

### Step 1: Start the Application
```
1. Open Terminal/CMD in project folder
2. Run: npm install
3. Run: npm run dev
4. Open: http://localhost:3000
5. You see: Modern e-commerce homepage
```

### Step 2: Explore Homepage
```
┌─────────────────────────────────────────┐
│  NEXUS    🔍  🛒(3)  🌙  EN  👤       │ ← Header
├─────────────────────────────────────────┤
│                                         │
│    PREMIUM PRODUCTS                     │ ← Hero Section
│    Optimal organization meets design    │
│                                         │
│  [EXPLORE]  [LEARN MORE]               │
│                                         │
├─────────────────────────────────────────┤
│  📱 ELECTRONICS  👗 FASHION  ⌚ ACCESS  │ ← Categories
├─────────────────────────────────────────┤
│                                         │
│  [Product 1] [Product 2] [Product 3]   │ ← Featured
│  [Product 4] [Product 5] [Product 6]   │   Products
│                                         │
├─────────────────────────────────────────┤
│  📧 Join Our Community                  │ ← Newsletter
│  [Email Input]  [Subscribe]            │
├─────────────────────────────────────────┤
│  Footer with company info, links        │
└─────────────────────────────────────────┘
```

### Step 3: Try Theme Toggle
```
Current: Light mode ☀️

Click Moon Icon → Smooth transition → Dark mode 🌙
  ↓
All text becomes light
All backgrounds become dark
Smooth 0.3s animation
  ↓
Click Sun Icon → Back to light mode ☀️
```

### Step 4: Try Language Selector
```
Click "EN" button → Language dropdown

├─ English (EN)
├─ Español (ES)
├─ Français (FR)
└─ Deutsch (DE)

Select "ES" → Spanish

Headers: "TIENDA" instead of "SHOP"
Buttons: "CARRITO" instead of "CART"
etc.
```

### Step 5: Login & Test Roles

#### Option 1: End-User
```
1. Click "Sign In" in header
2. Enter:
   Email: user@example.com
   Password: password123
3. Click Login

4. Redirected to: /dashboard
5. See: "Welcome back, John Buyer!"
6. Dashboard shows:
   - Cart items count
   - Recent orders
   - Total spent
   - Quick action cards
```

#### Option 2: Store Owner
```
1. Go to /login
2. Enter:
   Email: owner@example.com
   Password: password123
3. Click Login

4. Redirected to: /owner
5. See: Owner dashboard
6. User menu shows:
   Jane Owner
   Store Owner
   Premium Co.
```

#### Option 3: Super Admin
```
1. Go to /login
2. Enter:
   Email: admin@example.com
   Password: password123
3. Click Login

4. Redirected to: /admin
5. See: Admin dashboard
6. Full system access
```

### Step 6: Shopping Flow

```
HOMEPAGE
   ↓
Click "SHOP" or [EXPLORE COLLECTION]
   ↓
PRODUCTS PAGE (/products)
   ┌────────────────────────┐
   │ Filter by Price        │
   │ Sort by: Featured ▼    │
   │                        │
   │ [Product 1] [Product2] │
   │ [Product 3] [Product4] │
   │                        │
   └────────────────────────┘
   ↓
Click on Product
   ↓
PRODUCT DETAIL (/products/1)
   ┌────────────────┐
   │ [Image] [Side] │
   │ Name           │
   │ ⭐⭐⭐⭐⭐ (128) │
   │ $2,499         │
   │ Description    │
   │ Features       │
   │ Specifications │
   │ Related Items  │
   └────────────────┘
   ↓
Adjust quantity & Click "Add to Cart"
   ↓
See cart count update (1) in header
   ↓
Continue shopping or click Cart icon
   ↓
CART PAGE (/cart)
   ┌──────────────────────────────────┐
   │ Item 1  Qty: 1  -  +  Remove ❌   │
   │ Item 2  Qty: 2  -  +  Remove ❌   │
   │ Item 3  Qty: 1  -  +  Remove ❌   │
   │                                  │
   │ Order Summary:                   │
   │ Subtotal: $1,234.56             │
   │ Shipping: $15.00                │
   │ Tax: $124.85                    │
   │ Total: $1,374.41                │
   │                                  │
   │ [CHECKOUT] [CONTINUE SHOPPING]  │
   └──────────────────────────────────┘
   ↓
Click "CHECKOUT"
   ↓
CHECKOUT PAGE (/checkout)
   
   Progress: [1. SHIPPING] [2. PAYMENT] [3. CONFIRM]
   
   STEP 1: Shipping
   ├─ First Name: [_________]
   ├─ Last Name: [_________]
   ├─ Email: [_________]
   ├─ Phone: [_________]
   ├─ Address: [_________]
   ├─ City: [_________]
   ├─ State: [_________]
   ├─ ZIP: [_________]
   └─ [CONTINUE TO PAYMENT]
   
   ↓
   
   STEP 2: Payment
   ├─ Card Number: [_________]
   ├─ Expiry: [_________]
   ├─ CVV: [_________]
   └─ [BACK] [PLACE ORDER]
   
   ↓
   
   STEP 3: Confirmation
   ┌──────────────────────────┐
   │ ✓ ORDER CONFIRMED!       │
   │                          │
   │ Order #ORD-123456        │
   │                          │
   │ Confirmation sent to:    │
   │ user@example.com         │
   │                          │
   │ [VIEW ORDER]             │
   │ [CONTINUE SHOPPING]      │
   └──────────────────────────┘
```

### Step 7: User Dashboard (After Login)

```
DASHBOARD (/dashboard)
┌────────────────────────────────────────────┐
│ Welcome back, John Buyer!                  │
│ Manage your account and orders             │
├────────────────────────────────────────────┤
│ Items in Cart: 3  Recent Orders: 3  Spent: $481 │
├────────────────────────────────────────────┤
│                                            │
│ [MY ORDERS]  [WISHLIST]  [SHIPPING]       │
│ [SETTINGS]                                 │
│                                            │
├────────────────────────────────────────────┤
│ Recent Orders:                             │
│ #ORD-001  2/8/24  Delivered    $234.99   │
│ #ORD-002  2/5/24  In Transit   $156.50   │
│ #ORD-003  2/1/24  Processing   $89.99    │
│                                            │
│ [VIEW ALL ORDERS]                         │
└────────────────────────────────────────────┘
```

### Step 8: Header Features

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│  [Logo] [Shop] [Cart] [Categories] [Contact]  Right │
│                                                   ↓  │
│    🔍 [Search]                                      │
│    🛒 Cart (3)  ← Click to go to /cart             │
│    🌙 Theme    ← Click to toggle dark/light        │
│    EN 🔽       ← Language selector                  │
│    👤 John Buyer  ← User menu                       │
│                                                     │
└───────────────────────────────────────────────────────┘

Click 👤 Menu:
┌─────────────────────────────────┐
│ John Buyer                      │
│ user@example.com                │
│ 🟠 Customer                     │ (Role badge)
├─────────────────────────────────┤
│ 📊 Dashboard                    │
│ 👤 Profile                      │
│ ⚙️ Settings                     │
├─────────────────────────────────┤
│ 🚪 Logout                       │
└─────────────────────────────────┘
```

### Step 9: Wishlist

```
PRODUCTS PAGE (/products)

Product Card:
┌──────────────┐
│  [Image]  ❤️ │ ← Click heart
│  Name        │
│ ⭐⭐⭐⭐⭐   │
│ $999         │
│ [Add to Cart]│
└──────────────┘

After clicking ❤️:
Heart fills with orange → Item added to wishlist

WISHLIST PAGE (/wishlist):
┌──────────────────────────────┐
│ ❤️ Your Wishlist             │
│                              │
│ [Product 1] [Remove]         │
│ [Product 2] [Remove]         │
│ [Product 3] [Remove]         │
│                              │
│ [ADD ALL TO CART]            │
└──────────────────────────────┘
```

### Step 10: Mobile View

```
Mobile (< 768px):
┌──────────────────┐
│ ☰ NEXUS    🛒(3) │ ← Hamburger menu
├──────────────────┤
│                  │
│ [Hero Section]   │
│                  │
├──────────────────┤
│ [Categories]     │
│ [Stacked]        │
├──────────────────┤
│ [Products]       │
│ [Single Column]  │
│                  │
└──────────────────┘

Click ☰ Menu:
┌──────────────────┐
│ ✕                │
├──────────────────┤
│ Home             │
│ Shop             │
│ Cart             │
│ Categories       │
│ Contact          │
└──────────────────┘
```

---

## 🎨 Color Scheme

```
Light Mode:
  ┌─────────────────────────────┐
  │ Background: Off-white        │
  │ Text: Dark gray              │
  │ Accent: Burnt orange #FF6D00 │
  │ Cards: Pure white            │
  │ Borders: Light gray          │
  └─────────────────────────────┘

Dark Mode:
  ┌─────────────────────────────┐
  │ Background: Deep dark        │
  │ Text: Light gray             │
  │ Accent: Burnt orange #FF6D00 │
  │ Cards: Darker gray           │
  │ Borders: Medium gray         │
  └─────────────────────────────┘
```

---

## 🔄 Complete User Journey

```
NEW USER
   ↓
HOMEPAGE ← Browse products, see categories
   ↓
Click "Shop" → PRODUCTS PAGE
   ↓
Filter/Sort → Find product
   ↓
Click Product → PRODUCT DETAIL
   ↓
Add to Cart → Cart count updates
   ↓
Click Cart → CART PAGE
   ↓
Click Checkout → CHECKOUT PAGE
   ↓
Enter Shipping → Click Continue
   ↓
Enter Payment → Click Place Order
   ↓
Order Confirmed → See order number
   ↓
Redirected to Dashboard (needs login)
   ↓
LOGIN PAGE
   ↓
Enter credentials
   ↓
DASHBOARD (after login)
   ↓
Track Order → SHIPPING PAGE
   ↓
View Orders → ORDERS PAGE
   ↓
Manage Wishlist → WISHLIST PAGE
   ↓
Update Profile → PROFILE PAGE
```

---

## 📱 All Available Pages

```
PUBLIC ROUTES:
├─ /                    Homepage
├─ /login               Login
├─ /products            Product catalog
├─ /products/[id]       Product detail
├─ /cart                Shopping cart
└─ /checkout            Checkout

PROTECTED - END-USER:
├─ /dashboard           User dashboard
├─ /orders              Order history
├─ /wishlist            Wishlist
├─ /shipping            Track shipments
├─ /settings            Settings
└─ /profile             Profile

PROTECTED - OWNER:
└─ /owner               Owner dashboard

PROTECTED - ADMIN:
└─ /admin               Admin dashboard
```

---

## 🎯 Quick Commands Reference

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Open in browser
http://localhost:3000

# Test URLs
http://localhost:3000/products
http://localhost:3000/cart
http://localhost:3000/login
```

---

## ✨ Key Interactions

### Theme Toggle
```
Current Theme: Light ☀️
↓
Click Moon Icon 🌙
↓
Smooth animation (0.3s)
↓
New Theme: Dark 🌙
↓
Saved to localStorage
↓
Refresh → Dark theme persists
```

### Language Change
```
Current: English
↓
Click EN dropdown
↓
Select "Español"
↓
Entire UI translates instantly
↓
All text in Spanish
↓
Saved to Redux state
```

### Login Flow
```
Click Header Avatar (or Sign In)
↓
Redirected to /login
↓
Enter Email & Password
↓
Click Submit
↓
Verify credentials
↓
Set auth in Redux
↓
Redirect by role:
- end-user → /dashboard
- owner → /owner
- admin → /admin
```

---

## 🎓 Learning Path

```
Start Here
   ↓
1. Explore homepage (2 min)
   ↓
2. Try theme toggle (1 min)
   ↓
3. Try languages (1 min)
   ↓
4. Browse products (5 min)
   ↓
5. Login as end-user (5 min)
   ↓
6. Test shopping flow (10 min)
   ↓
7. Explore dashboard (5 min)
   ↓
8. Test other roles (5 min)
   ↓
9. Read documentation (15 min)
   ↓
10. Start customizing! 🎉
```

---

**Total Time to Fully Explore**: 45-60 minutes

**Status**: ✅ Ready to Use!

**Next**: Open http://localhost:3000 and start exploring! 🚀
