import React from "react";

import {
  armyPrice,
  ArmyType,
  DisabledArmyStates,
  useAppDispatch,
  useAppSelector,
} from "src/shared";

import { CardList } from "src/entities/Army";

import {
  roundArmyActions,
  selectCurrentPoints,
  selectPrices,
} from "../model/round-army.slice";

interface CardsToChooseProps {
  className?: string;
}

export const CardsToChoose: React.FC<CardsToChooseProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const currentPoints = useAppSelector(selectCurrentPoints);
  const { siegePrice, rangePrice, meleePrice } = useAppSelector(selectPrices);

  const handleAdd = (armyType: ArmyType) =>
    dispatch(roundArmyActions.add(armyType));

  const disabledStates: DisabledArmyStates = {
    [ArmyType.Melee]: currentPoints < meleePrice,
    [ArmyType.Ranged]: currentPoints < rangePrice,
    [ArmyType.Siege]: currentPoints < siegePrice,
  };

  return (
    <div className={className}>
      <h2 className={"text-2xl font-bold text-center mb-5"}>
        Select your army
      </h2>
      <CardList onIconClick={handleAdd} disabledStates={disabledStates} />
    </div>
  );
};
