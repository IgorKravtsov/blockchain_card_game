import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import { MeleeCard, RangedCard, SiegeCard } from "src/entities/Army";
import { ArmyType, useAppDispatch, useAppSelector } from "src/shared";

import { roundArmyActions, selectRoundArmy } from "../model/round-army.slice";

export const YourArmyList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { siegeArmyCount, rangedArmyCount, meleeArmyCount } =
    useAppSelector(selectRoundArmy);

  const handleRemoveCard = (armyType: ArmyType) =>
    dispatch(roundArmyActions.remove(armyType));

  if (!meleeArmyCount && !rangedArmyCount && !siegeArmyCount)
    return <h5 className={"h-[300px]"}>Choose something</h5>;

  return (
    <ul className={"rounded-2xl flex flex-wrap justify-center px-1 h-[300px]"}>
      {!!meleeArmyCount && (
        <li>
          <MeleeCard
            icon={<TrashIcon className="h-6 w-6" />}
            helperText={`x${meleeArmyCount}`}
            showPrice={false}
            iconColor={"red"}
            defaultSize={false}
            className={"w-[220px] h-[290px] mr-2"}
            onClick={() => handleRemoveCard(ArmyType.Melee)}
          />
        </li>
      )}
      {!!rangedArmyCount && (
        <li>
          <RangedCard
            icon={<TrashIcon className="h-6 w-6" />}
            helperText={`x${rangedArmyCount}`}
            showPrice={false}
            iconColor={"red"}
            defaultSize={false}
            className={"w-[220px] h-[290px] mr-2"}
            onClick={() => handleRemoveCard(ArmyType.Ranged)}
          />
        </li>
      )}
      {!!siegeArmyCount && (
        <li>
          <SiegeCard
            icon={<TrashIcon className="h-6 w-6" />}
            helperText={`x${siegeArmyCount}`}
            showPrice={false}
            iconColor={"red"}
            defaultSize={false}
            className={"w-[220px] h-[290px] mr-2"}
            onClick={() => handleRemoveCard(ArmyType.Siege)}
          />
        </li>
      )}
    </ul>
  );
};
