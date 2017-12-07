// @flow
import type { AbcCurrencyInfo } from 'airbitz-core-types'

export const bitcoinTestnetInfo: AbcCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'BTC',
  currencyName: 'Bitcoin',
  pluginName: 'bitcointestnet',
  denominations: [
    { name: 'BTC', multiplier: '100000000', symbol: '₿' },
    { name: 'mBTC', multiplier: '100000', symbol: 'm₿' },
    { name: 'bits', multiplier: '100', symbol: 'ƀ' }
  ],
  walletTypes: [
    'wallet:bitcoin-bip49-testnet',
    'wallet:bitcoin-bip44-testnet',
    'wallet:bitcoin-testnet'
  ],

  // Configuration options:
  defaultSettings: {
    network: {
      type: 'bitcointestnet',
      magic: 0x0709110b,
      keyPrefix: {
        privkey: 0xef,
        xpubkey: 0x043587cf,
        xprivkey: 0x04358394,
        xpubkey58: 'tpub',
        xprivkey58: 'tprv',
        coinType: 1
      },
      addressPrefix: {
        pubkeyhash: 0x6f,
        scripthash: 0xc4,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
      }
    },
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 1000,
    feeUpdateInterval: 60000,
    feeInfoServer: '',
    simpleFeeSettings: {
      highFee: '30',
      lowFee: '5',
      standardFeeLow: '10',
      standardFeeHigh: '15',
      standardFeeLowAmount: '17320',
      standardFeeHighAmount: '86700000'
    },
    electrumServers: [
      ['raspi.hsmiths.com', '51001'],
      ['electrum.hsmiths.com', '8080'],
      ['electrum.hsmiths.com', '50001'],
      ['e-x.not.fyi', '50001'],
      ['us.electrum.be', '50001'],
      ['mooo.not.fyi', '50011'],
      ['electrum.festivaldelhumor.org', '50001'],
      ['electrum.be', '50001'],
      ['currentlane.lovebitco.in', '50001'],
      ['helicarrier.bauerj.eu', '50001'],
      ['erbium1.sytes.net', '50001']
    ]
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://test-insight.bitpay.com//block/%s',
  addressExplorer: 'https://test-insight.bitpay.com//address/%s',
  transactionExplorer: 'https://test-insight.bitpay.com//tx/%s',

  // Images:
  symbolImage:
    'data:image/png;base64,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',
  symbolImageDarkMono:
    'data:image/png;base64,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'
}
