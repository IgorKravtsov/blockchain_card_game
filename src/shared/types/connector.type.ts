export type Connector = {
  connect: () => void;
};

export type ConnectorName = "metaMask" | "walletConnect" | "coinbaseWallet";

export type Connectors = {
  [Name in ConnectorName]: Connector;
};
