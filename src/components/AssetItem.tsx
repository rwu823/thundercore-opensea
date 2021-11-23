import React from 'react'

import { Box, chakra, Flex } from '@chakra-ui/react'

export type AssetItemProps = {
  img: string
  name: string
  sales: number
}
export const AssetItem: React.FC<
  AssetItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, img, name, sales, ...props }) => (
  <Box border="1px solid #ccc" overflow="hidden" w={250}>
    {img && (
      <Box>
        <Flex h="250">
          <chakra.img alt={name} display="block" m="0 auto" src={img} />
        </Flex>

        <Box>
          <pre>
            {JSON.stringify(
              {
                name,
                num_sales: sales,
                // asset_contract_address: asset.asset_contract.address,
              },
              null,
              2,
            )}
          </pre>

          {children}
        </Box>
      </Box>
    )}
  </Box>
)
