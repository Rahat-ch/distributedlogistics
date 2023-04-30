export const ChainId = {
  MAINNET: 1, // Ethereum
  GOERLI: 5,
  POLYGON_MUMBAI: 80001,
  POLYGON_MAINNET: 137,
};

export let activeChainId = ChainId.POLYGON_MUMBAI;
export const supportedChains = [
  ChainId.GOERLI,
  ChainId.POLYGON_MAINNET,
  ChainId.POLYGON_MUMBAI,
];

// export const getRPCProvider = (chainId: number) => {
//   switch (chainId) {
//     case 1:
//       return process.env.NEXT_PUBLIC_MAINNET_RPC;
//     case 5:
//       return process.env.NEXT_PUBLIC_GOERLI_RPC;
//     case 80001:
//       return process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC;
//     case 137:
//       return process.env.NEXT_PUBLIC_POLYGON_MAINNET_RPC;
//     default:
//       return process.env.NEXT_PUBLIC_MAINNET_RPC;
//   }
// };

// export const getExplorer = (chainId: number) => {
//   switch (chainId) {
//     case 1:
//       return "https://etherscan.io";
//     case 5:
//       return "https://goerli.etherscan.io";
//     case 80001:
//       return "https://mumbai.polygonscan.com";
//     case 137:
//       return "https://polygonscan.com";
//     default:
//       return "https://mumbai.polygonscan.com";
//   }
// };

// export const getSupportedChains = () => {};