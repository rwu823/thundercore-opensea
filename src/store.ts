import { OpenSeaAsset } from '@/apis/fetch.types'

import { atomWithStorage } from 'jotai/utils'

export const watchListAtom = atomWithStorage<Record<string, OpenSeaAsset>>(
  'watchList',
  {},
)
