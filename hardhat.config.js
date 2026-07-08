require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox"); //
require("hardhat-gas-reporter");

const {
  PRIVATE_KEY,
  BSC_MAINNET_RPC_URL,
  BSC_TESTNET_RPC_URL,
  BSCSCAN_API_KEY,
} = process.env;

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},

    bscMainnet: {
      url: BSC_MAINNET_RPC_URL || "",
      chainId: 56,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    bscTestnet: {
      url: BSC_TESTNET_RPC_URL || "",
      chainId: 97,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    showMethodSig: true,
    coinmarketcap: null,
  },

  etherscan: {
    // apiKey: ETHERSCAN_API_KEY || "",  // Ethereum mainnet + Sepolia
    apiKey: process.env.BSCSCAN_API_KEY || "",      // BSC mainnet + testnet

  }

};