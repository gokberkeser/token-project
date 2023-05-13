const HDWalletProvider = require('@truffle/hdwallet-provider');
const INFURA_API_KEY = 'https://avalanche-fuji.infura.io/v3/5c47561791b04ec8ac96254deb104caf';
const MNEMONIC = "enroll arrive common lake trick slab multiply motor sugar muffin lion crumble";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      networkCheckTimeout: 100000
    },
    fuji: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '43113',
      gas: 4465030,
      networkCheckTimeout: 100000
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  }
};