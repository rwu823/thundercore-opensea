import React from 'react'

import Link from 'next/link'

import { AssetItem } from '@/components/AssetItem'
import { watchListAtom } from '@/store'
import { Box, chakra, Flex } from '@chakra-ui/react'

import { useAtom } from 'jotai'

export type WatchListProps = {}

export const WatchListPage: React.FC<
  WatchListProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  const [watchList] = useAtom(watchListAtom)
  return (
    <Box>
      <chakra.h1 textAlign="center">WatchList</chakra.h1>

      <Link href="/">
        <a>Go to NFTs</a>
      </Link>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: '1rem',
        }}
      >
        {Object.values(watchList).map((asset) => (
          <AssetItem
            key={asset.id}
            img={asset.image_preview_url ?? ''}
            name={asset.name ?? ''}
            sales={asset.num_sales}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default WatchListPage
