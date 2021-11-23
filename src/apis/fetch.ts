import { OpenSeaAsset } from '@/apis/fetch.types'

import unfetch from 'isomorphic-unfetch'

const OPEN_SEA_API = `https://api.opensea.io/api/v1`

export const fetchOpenSea = (
  url: string,
  { headers, ...options }: RequestInit = {},
) =>
  unfetch(`${OPEN_SEA_API}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  }).then(async (res) => {
    const text = await res.text()

    if (String(res.status).startsWith('2')) {
      return JSON.parse(text)
    }

    return Promise.reject(text)
  })

export const fetchOpenSeaAssets = ({
  order = 'desc',
  offset = 0,
  limit = 20,
}: Partial<{
  order: 'asc' | 'desc'
  offset: number
  limit: number
}> = {}): Promise<OpenSeaAsset[]> => {
  const qs = new URLSearchParams({
    order_by: 'sale_count',
    order_direction: order,
    offset: String(offset),
    limit: String(limit),
  })

  return fetchOpenSea(`assets?${qs.toString()}`).then(({ assets }) => assets)
}
