import React from "react";
import { ArmyCard, ArmyCardProps } from "./ArmyCard";

import { armyPrice, useAppSelector } from "src/shared";
import { selectPrices } from "src/features/RoundArmy/model/round-army.slice";

interface MeleeCardProps extends Partial<ArmyCardProps> {}

export const MeleeCard: React.FC<MeleeCardProps> = (props) => {
  const { meleePrice } = useAppSelector(selectPrices);

  return (
    <ArmyCard
      {...props}
      armyName={"Swordsman"}
      price={meleePrice}
      cardImage={"melee_card"}
    />
  );
};
