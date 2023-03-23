import React from "react";
import { ArmyCard, ArmyCardProps } from "./ArmyCard";
import { armyPrice, useAppSelector } from "src/shared";
import { selectPrices } from "src/features/RoundArmy/model/round-army.slice";

interface RangedCardProps extends Partial<ArmyCardProps> {}

export const RangedCard: React.FC<RangedCardProps> = (props) => {
  const { rangePrice } = useAppSelector(selectPrices);

  return (
    <ArmyCard
      {...props}
      armyName={"Archer"}
      price={rangePrice}
      cardImage={"ranged_card"}
    />
  );
};
