interface Network {
  id: number,
  name: string,
  symbol: string
}

interface NetworkMetadata {
  id: number,
  name: string,
  nativeCurrency: NativeCurrency,
  symbol: string,
  gas: GasData
}

interface NativeCurrency {
  symbol: string
}

interface GasData {
  fees: GasFees,
  price: {
    selected: string,
    levels: GasLevels
  }
}

interface GasFees {
  nextBaseFee: string,
  maxBaseFeePerGas: string,
  maxPriorityFeePerGas: string,
  maxFeePerGas: string
}

interface GasLevels {
  slow?: string,
  standard: string,
  fast?: string,
  asap?: string,
  custom?: string
}

interface Balance {
  chainId: number,
  address: Address,
  name: string,
  symbol: string,
  balance: string,
  decimals: number,
  displayBalance: string
}

interface Token {
  chainId: number,
  name: string,
  symbol: string,
  address: string,
  decimals: number,
  logoURI?: string
}