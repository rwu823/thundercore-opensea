import React, { useCallback } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { AssetItem } from '@/components/AssetItem'
import { Paginate, usePaginate } from '@/components/Paginate'
import { useFetchOpenSeaAssets } from '@/hooks/useFetchOpenSeaAssets'
import { watchListAtom } from '@/store'
import { Box, chakra, Flex, Text, useToast } from '@chakra-ui/react'

import { useAtom } from 'jotai'

type Props = {}

const PAGE_COUNT = 20

const NFTsPage: React.FC<Props> = function ({}) {
  const paginate = usePaginate()
  const toast = useToast()
  const [watchList, setWatchList] = useAtom(watchListAtom)

  const { data: assets = [], isLoading } = useFetchOpenSeaAssets({
    offset: paginate.page * PAGE_COUNT,
  })

  const addWatchList = useCallback(
    (assetIndex: number) => {
      const { id, name } = assets[assetIndex]

      setWatchList((prev) => ({
        ...prev,
        [id]: assets[assetIndex],
      }))

      toast({
        title: `Add to WatchList`,
        position: 'bottom-right',
        description: `${name} is added to your watchlist.`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    },

    [assets, setWatchList, toast],
  )

  return (
    <chakra.div>
      <Head>
        <title>NFTs</title>
      </Head>

      <chakra.h1 textAlign="center">NFTs</chakra.h1>
      <Link href="/watchlist">
        <a>Go to WatchList</a>
      </Link>
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center" minH="100vh">
          loading...
        </Flex>
      ) : (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          sx={{
            gap: '1rem',
          }}
        >
          {assets.map((asset, i) => (
            <AssetItem
              key={asset.id}
              img={asset.image_preview_url ?? ''}
              name={asset.name ?? ''}
              sales={asset.num_sales}
            >
              {!(asset.id in watchList) && (
                <Box cursor="pointer" p={2} textAlign="center">
                  <Text
                    sx={{
                      '&:hover': {
                        color: 'blue',
                      },
                    }}
                    onClick={() => addWatchList(i)}
                  >
                    + Add to Watchlist
                  </Text>
                </Box>
              )}
            </AssetItem>
          ))}
        </Flex>
      )}

      <Box my={50}>
        <Paginate {...paginate} />
      </Box>
    </chakra.div>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   1

//   //
//   return {
//     props: {},
//   }
// }

export default NFTsPage
