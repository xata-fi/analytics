interface ChainConfig {
    blockchainName: string,
    scannerName: string,
    scannerUrl: string,
    trustwalletChain: string,
    tokenStandard: string
}

interface Blockchain {
   [key: string]: ChainConfig 
}

export const chainConfig: Blockchain = {
    "BINANCE_SMART_CHAIN": {
        "blockchainName": "Binance Smart Chain",
        "scannerName": "BscScan",
        "scannerUrl": "bscscan.com",
        "trustwalletChain": "smartchain",
        "tokenStandard": "BEP20"
    }
}