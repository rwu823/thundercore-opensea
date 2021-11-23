import { useQuery, UseQueryOptions } from 'react-query'

import { fetchOpenSea } from '@/apis/fetch'

type QueryKey = [string, ...unknown[]]

export type UseFetchOptions<Data = JSON, Error = unknown> = UseQueryOptions<
  Data,
  Error,
  Data,
  QueryKey
>
export const useFetchOpenSea = <Data = JSON, Error = unknown>(
  queryKey: QueryKey,
  fetchParams: Partial<RequestInit> = {},
  useQueryOptions: UseFetchOptions<Data, Error> = {},
) =>
  useQuery(
    queryKey,
    ({ queryKey: [endpoint] }) => fetchOpenSea(endpoint, fetchParams),
    useQueryOptions,
  )
