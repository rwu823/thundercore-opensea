export interface OpenSeaAsset {
  id: number
  token_id: string
  num_sales: number
  background_color: null
  image_url: string
  image_preview_url: null | string
  image_thumbnail_url: null | string
  image_original_url: null | string
  animation_url: null
  animation_original_url: null
  name: null | string
  description: null | string
  external_link: null | string
  asset_contract: Assetcontract
  permalink: string
  collection: Collection
  decimals: null | number
  token_metadata: null | string
  owner: Owner
  sell_orders: null
  creator: Creator
  traits: Trait[]
  last_sale: null
  top_bid: null
  listing_date: null
  is_presale: boolean
  transfer_fee_payment_token: null
  transfer_fee: null
}
interface Trait {
  trait_type: string
  value: string
  display_type: null
  max_value: null
  trait_count: number
  order: null
}
interface Creator {
  user: User2 | User22 | null
  profile_img_url: string
  address: string
  config: string
}
interface User22 {
  username: null
}
interface User2 {
  username: string
}
interface Owner {
  user: User
  profile_img_url: string
  address: string
  config: string
}
interface User {
  username: null | string
}
interface Collection {
  banner_image_url: null | string
  chat_url: null
  created_date: string
  default_to_fiat: boolean
  description: null | string
  dev_buyer_fee_basis_points: string
  dev_seller_fee_basis_points: string
  discord_url: null | string
  display_data: Displaydata
  external_url: null | string
  featured: boolean
  featured_image_url: null | string
  hidden: boolean
  safelist_request_status: string
  image_url: null | string
  is_subject_to_whitelist: boolean
  large_image_url: null | string
  medium_username: null | string
  name: string
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: string
  opensea_seller_fee_basis_points: string
  payout_address: null | string
  require_email: boolean
  short_description: null
  slug: string
  telegram_url: null | string
  twitter_username: null | string
  instagram_username: null | string
  wiki_url: null
}
interface Displaydata {
  card_display_style: string
  images?: any[]
}
interface Assetcontract {
  address: string
  asset_contract_type: string
  created_date: string
  name: string
  nft_version: null | string
  opensea_version: null | string
  owner: number
  schema_name: string
  symbol: string
  total_supply: null | string
  description: string
  external_link: null | string
  image_url: null | string
  default_to_fiat: boolean
  dev_buyer_fee_basis_points: number
  dev_seller_fee_basis_points: number
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: number
  opensea_seller_fee_basis_points: number
  buyer_fee_basis_points: number
  seller_fee_basis_points: number
  payout_address: null | string
}
