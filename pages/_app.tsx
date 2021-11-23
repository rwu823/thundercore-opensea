import 'core-js/modules/es.global-this'
import 'modern-normalize/modern-normalize.css'

import React from 'react'
import { QueryClientProvider } from 'react-query'

import { AppProps } from 'next/app'

import { queryClient } from '@/apis/queryClient'
import {
  chakra,
  ChakraProvider,
  extendTheme,
  SystemStyleObject,
  ThemeConfig,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

theme.styles.global = {} as SystemStyleObject

const MaxWrapper = chakra('div', {
  baseStyle: {
    p: '0 1em',
    m: '0 auto',
    maxW: 1200,
  },
})

const App: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <MaxWrapper>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MaxWrapper>
    </ChakraProvider>
  )
}

export default App
