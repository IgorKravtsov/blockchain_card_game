import React from "react";
import { ArmyCard, ArmyCardProps } from "./ArmyCard";
import { armyPrice, useAppSelector } from "src/shared";
import { selectPrices } from "src/features/RoundArmy/model/round-army.slice";

interface SiegeCardProps extends Partial<ArmyCardProps> {}

export const SiegeCard: React.FC<SiegeCardProps> = (props) => {
  const { siegePrice } = useAppSelector(selectPrices);

  return (
    <ArmyCard
      {...props}
      armyName={"Tributes"}
      price={siegePrice}
      cardImage={"siege_card"}
    />
  );
};
