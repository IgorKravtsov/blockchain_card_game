import React, { ReactNode } from "react";

import { WagmiConfig, createClient, configureChains } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

const { provider } = configureChains([sepolia], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      options: {
        projectId: process.env.GATSBY_WALLET_CONNECT_PROJECT_ID ?? "",
      },
    }),
    new CoinbaseWalletConnector({
      options: { appName: process.env.GATSBY_COINBASE_WALLET_APP_NAME ?? "" },
    }),
  ],
});

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
