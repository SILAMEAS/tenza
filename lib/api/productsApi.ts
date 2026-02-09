import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
  description: string
}

export interface Order {
  id: string
  date: string
  total: number
  status: string
  items: Array<{ id: string; quantity: number }>
}

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      return headers
    },
  }),
  tagTypes: ['Product', 'Order'],
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query<Product[], { category?: string; search?: string }>({
      queryFn: async (args) => {
        // Mock data - replace with actual API call
        const mockProducts: Product[] = [
          {
            id: '1',
            name: 'Premium Wireless Headphones',
            price: 299.99,
            image: '/products/headphones.jpg',
            rating: 4.8,
            reviews: 245,
            category: 'Electronics',
            description: 'High-quality wireless headphones with noise cancellation',
          },
          {
            id: '2',
            name: 'Stainless Steel Watch',
            price: 199.99,
            image: '/products/watch.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Accessories',
            description: 'Elegant stainless steel watch with automatic movement',
          },
          {
            id: '3',
            name: 'Leather Messenger Bag',
            price: 149.99,
            image: '/products/bag.jpg',
            rating: 4.7,
            reviews: 156,
            category: 'Fashion',
            description: 'Premium leather messenger bag for professionals',
          },
          {
            id: '4',
            name: 'Smart Fitness Band',
            price: 129.99,
            image: '/products/fitness.jpg',
            rating: 4.5,
            reviews: 312,
            category: 'Electronics',
            description: 'Track your fitness with our advanced smart band',
          },
        ]

        let filtered = mockProducts

        if (args.category) {
          filtered = filtered.filter((p) => p.category === args.category)
        }

        if (args.search) {
          filtered = filtered.filter((p) =>
            p.name.toLowerCase().includes(args.search?.toLowerCase() || ''),
          )
        }

        return { data: filtered }
      },
      providesTags: ['Product'],
    }),

    // Get product by ID
    getProductById: builder.query<Product, string>({
      queryFn: async (id) => {
        const mockProducts: Product[] = [
          {
            id: '1',
            name: 'Premium Wireless Headphones',
            price: 299.99,
            image: '/products/headphones.jpg',
            rating: 4.8,
            reviews: 245,
            category: 'Electronics',
            description: 'High-quality wireless headphones with noise cancellation',
          },
          {
            id: '2',
            name: 'Stainless Steel Watch',
            price: 199.99,
            image: '/products/watch.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Accessories',
            description: 'Elegant stainless steel watch with automatic movement',
          },
        ]

        const product = mockProducts.find((p) => p.id === id)
        if (!product) {
          return { error: { status: 404, data: 'Product not found' } }
        }

        return { data: product }
      },
      providesTags: ['Product'],
    }),

    // Create order
    createOrder: builder.mutation<Order, Omit<Order, 'id' | 'date'>>({
      queryFn: async (order) => {
        const newOrder: Order = {
          ...order,
          id: Math.random().toString(36).substr(2, 9),
          date: new Date().toISOString(),
        }
        return { data: newOrder }
      },
      invalidatesTags: ['Order'],
    }),

    // Get orders
    getOrders: builder.query<Order[], void>({
      queryFn: async () => {
        // Mock data - replace with actual API call
        return {
          data: [
            {
              id: 'ORD-001',
              date: '2024-02-08',
              total: 299.99,
              status: 'Delivered',
              items: [{ id: '1', quantity: 1 }],
            },
            {
              id: 'ORD-002',
              date: '2024-02-05',
              total: 349.98,
              status: 'Processing',
              items: [
                { id: '2', quantity: 1 },
                { id: '3', quantity: 1 },
              ],
            },
          ],
        }
      },
      providesTags: ['Order'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateOrderMutation,
  useGetOrdersQuery,
} = productsApi

export default productsApi
