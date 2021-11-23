import React from 'react'

import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
