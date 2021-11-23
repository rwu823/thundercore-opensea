<h1 align="center">
  <img width="200" src="./public/logo.png"/>
  <p>thundercore-opensea</p>
  <a href="https://circleci.com/gh/rwu823/thundercore-opensea" alt="Build Status">
    <img src="https://img.shields.io/circleci/build/github/rwu823/thundercore-opensea/master?style=for-the-badge&logo=circleci" />
  </a>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/thundercore-opensea">
    <img src="https://img.shields.io/npm/v/thundercore-opensea?style=for-the-badge&logo=npm"/>
  </a>
  <a href="https://codecov.io/github/rwu823/thundercore-opensea">
    <img src="https://img.shields.io/codecov/c/github/rwu823/thundercore-opensea/master?style=for-the-badge&logo=codecov"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/thundercore-opensea?style=for-the-badge&logo=webpack" />
</p>

<h3 align="center">
  <a href="https://rwu823.github.io/thundercore-opensea">Live Demo</a>
</h3>

## Installation

```sh
yarn install
```

## Development

```
yarn dev
```

## File Structure

This project is based on [next.js](https://nextjs.org/).

```
pages
├── _app.tsx
├── _document.tsx
├── index.tsx
└── watchlist.tsx


src
├── apis
│  ├── fetch.ts
│  ├── fetch.types.ts
│  └── queryClient.ts
├── components
│  ├── AssetItem.tsx
│  └── Paginate.tsx
├── hooks
│  ├── useFetchOpenSea.ts
│  └── useFetchOpenSeaAssets.ts

store.ts

```


## Third Party Packages

### UI
- chakra-ui

### API caching
- react-query

### State management
- jotai
