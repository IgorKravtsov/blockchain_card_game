import React from "react";
import { Button } from "@material-tailwind/react";

import { routes, useConnectors } from "src/shared";
import { useNavigate } from "react-router-dom";

const NotAuth: React.FC = () => {
  const { metaMask, coinbaseWallet } = useConnectors();
  const navigate = useNavigate();

  const connect = async (cb: () => Promise<void>) => {
    await cb();
    navigate(routes.Home);
  };

  return (
    <main className={"w-screen h-screen"}>
      <div
        className={"w-[300px] mt-[20%] mx-auto flex flex-col justify-center"}
      >
        <Button
          color={"orange"}
          onClick={() => {
            metaMask.connect();
            navigate(routes.Home);
          }}
        >
          Metamask
        </Button>
        <Button
          className={"mt-4"}
          color={"amber"}
          onClick={() => {
            coinbaseWallet.connect();
            navigate(routes.Home);
          }}
        >
          Coinbase
        </Button>
      </div>
    </main>
  );
};

export default NotAuth;
