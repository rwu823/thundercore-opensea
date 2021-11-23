import { OpenSeaAsset } from '@/apis/fetch.types'
import { useFetchOpenSea, UseFetchOptions } from '@/hooks/useFetchOpenSea'

export const useFetchOpenSeaAssets = (
  {
    order = 'desc',
    offset = 0,
    limit = 20,
  }: Partial<{
    order: 'asc' | 'desc'
    offset: number
    limit: number
  }> = {},
  useQueryOptions: UseFetchOptions<{ assets: OpenSeaAsset[] }> = {},
) => {
  const qs = new URLSearchParams({
    order_by: 'sale_count',
    order_direction: order,
    offset: String(offset),
    limit: String(limit),
  })

  const { data, ...query } = useFetchOpenSea(
    [`assets?${qs.toString()}`],
    {},
    useQueryOptions,
  )

  return {
    data: data?.assets,
    ...query,
  }
}
