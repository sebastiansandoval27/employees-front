'use client'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface QueryClientProviderProps {
  children: React.ReactNode
}

export const ReactQueryProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
