// Configuration for different networks

export const NETWORKS = {
  // Local development
  local: {
    name: "Localhost",
    chainId: 1337,
    rpcUrl: "http://127.0.0.1:8545",
    contractAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", // Update after local deployment
    explorerUrl: null
  },
  
  // Polygon Mumbai Testnet (FREE)
  polygonMumbai: {
    name: "Polygon Mumbai",
    chainId: 80001,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    contractAddress: "0xYOUR_DEPLOYED_CONTRACT_ADDRESS_HERE", // Update after deployment
    explorerUrl: "https://mumbai.polygonscan.com"
  },
  
  // Polygon Mainnet (PRODUCTION)
  polygon: {
    name: "Polygon",
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com",
    contractAddress: "0xYOUR_DEPLOYED_CONTRACT_ADDRESS_HERE", // Update after deployment
    explorerUrl: "https://polygonscan.com"
  }
};

// Set which network to use (change based on environment)
export const CURRENT_NETWORK = process.env.REACT_APP_NETWORK || 'local';

export const getNetworkConfig = () => {
  return NETWORKS[CURRENT_NETWORK];
};
