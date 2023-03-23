import { Connectors } from "../../../types/connector.type";

import { useConnect } from "wagmi";

export const useConnectors = (): Connectors => {
  const { connect, connectors } = useConnect();

  const connectorEntries = connectors.map((connector) => {
    return [connector.id, { connect: () => connect({ connector }) }];
  });

  return Object.fromEntries(connectorEntries);
};
