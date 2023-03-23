import React from "react";
import { useAuth } from "src/shared";
import { CenterScreenContainer } from "src/shared/ui/Container/CenterScreenContainer";

export const NotFound: React.FC = () => {
  const { isConnected } = useAuth();
  return (
    <CenterScreenContainer>
      <h1 className={"font-bold text-5xl"}>There is no such page!</h1>
      {!isConnected && (
        <h2 className={"mt-2 text-2xl"}>You need to enter your account</h2>
      )}
    </CenterScreenContainer>
  );
};
