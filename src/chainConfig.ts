interface ChainConfig {
  blockchainName: string
  scannerName: string
  scannerUrl: string
  trustwalletChain: string
  tokenStandard: string
  conveyorSubgraph: string
  mevSubgraph: string
  blocksSubgraph: string
}

interface Blockchain {
  BINANCE_SMART_CHAIN: ChainConfig
  POLYGON: ChainConfig
}

export const chainConfig: Blockchain = {
  BINANCE_SMART_CHAIN: {
    blockchainName: 'Binance Smart Chain',
    scannerName: 'BscScan',
    scannerUrl: 'bscscan.com',
    trustwalletChain: 'smartchain',
    tokenStandard: 'BEP20',
    conveyorSubgraph: 'https://api.thegraph.com/subgraphs/name/r2d2-rmbl/xata-bsc',
    mevSubgraph: 'https://api.thegraph.com/subgraphs/id/QmcqWHjmnCf381CU2XE6ZRuisgRXrSX5hJNW1EZ5Lmtmzu',
    blocksSubgraph: 'https://api.thegraph.com/subgraphs/name/astroswap/bsc-blocks',
  },
  POLYGON: {
    blockchainName: 'Polygon',
    scannerName: 'PolygonScan',
    scannerUrl: 'polygonscan.com',
    trustwalletChain: 'polygon',
    tokenStandard: 'ERC20',
    conveyorSubgraph: 'https://api.thegraph.com/subgraphs/name/r2d2-rmbl/xata-polygon',
    mevSubgraph: 'https://api.thegraph.com/subgraphs/name/r2d2-rmbl/xata-polygon-conveyor',
    blocksSubgraph: 'https://api.thegraph.com/subgraphs/name/matthewlilley/polygon-blocks',
  },
}
