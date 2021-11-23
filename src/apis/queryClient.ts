import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: (attempt) => attempt * 500,
      refetchOnWindowFocus: false,
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
})
