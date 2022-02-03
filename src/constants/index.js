export const FACTORY_ADDRESS = '0x5f8017621825BC10D63d15C3e863f893946781F7'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// whitelist token list to disable warnings
export const TOKEN_WHITELIST = [
  //BSC Tokens
  '0x5409acfaaa1e60da8ffb9fe2822a23e327616d76', //BUSD
  '0x55d398326f99059ff775485246999027b3197955', // USDT
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // ETH
  '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xcc42724c6683b7e57334c4e856f4c9965ed682bd', // MATIC
  '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // WBNB
  '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // LTC
  '0xa2120b9e674d3fc3875f415a7df52e382f141225', // ATA
  '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
  '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // LINK
  '0x1ce0c2827e2ef14d5c4f29a091d735a204794041', // AVAX
  '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', //DOT
  '0xba2ae424d960c26247dd6c32edc70b295c744c43', //DOGE
  '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', //DAI
  '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf', //BCH
  '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153', // FIL
  '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', // UNI
  '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce8ß2', // CAKE
  '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4', // SUSHI
  '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // BTCB
  //Polygon Tokens
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', //USDT
  '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', //DAI
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', //USDC
  '0x0df0f72ee0e5c9b7ca761ecec42754992b2da5bf', //ATA
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', //WMATIC
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
  '0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b',

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  '0x7d7e813082ef6c143277c71786e5be626ec77b20',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  '0x87da823b6fc8eb8575a235a824690fda94674c88',
  '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  '0xe1573b9d29e2183b1af0e743dc2754979a40d237',
  '0x45804880de22913dafe09f4980848ece6ecbaf78',
  '0x709f7b10f22eb62b05913b59b92ddd372d4e2152',
]

export const ADDRESS_TO_LOGO = {
  '0x0df0f72ee0e5c9b7ca761ecec42754992b2da5bf': 'ata.png',
}
