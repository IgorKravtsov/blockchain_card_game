import { useConnect, Connector as WagmiConnector } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

import { Connector } from "../../../types/connector.type";

const useConnectorAdapter = (connector: WagmiConnector): Connector => {
  const { connect } = useConnect({ connector });
  return { connect };
};

export const useMetaMaskConnector = (): Connector => {
  if (window.ethereum?.isMetaMask) {
    const connector = new MetaMaskConnector();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useConnectorAdapter(connector);
  }

  return {
    connect: () => window.open("https://metamask.io/download/", "_blank"),
  };
};

export const useWalletConnectConnector = (): Connector => {
  const connector = new WalletConnectConnector({
    options: {
      projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID ?? "",
    },
  });
  return useConnectorAdapter(connector);
};

export const useCoinbaseWalletConnector = (): Connector => {
  const connector = new CoinbaseWalletConnector({
    options: { appName: process.env.REACT_APP_COINBASE_WALLET_APP_NAME ?? "" },
  });
  return useConnectorAdapter(connector);
};
