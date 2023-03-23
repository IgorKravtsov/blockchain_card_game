import React from "react";

import { ArmyType, DisabledArmyStates } from "src/shared";

import { MeleeCard } from "./ArmyCards/MeleeCard";
import { RangedCard } from "./ArmyCards/RangedCard";
import { SiegeCard } from "./ArmyCards/SiegeCard";

interface CardListProps {
  onIconClick?: (armyType: ArmyType) => void;
  disabledStates?: DisabledArmyStates;
}

export const CardList: React.FC<CardListProps> = ({
  onIconClick,
  disabledStates,
}) => {
  return (
    <ul className={"flex flex-wrap justify-center"}>
      <li className={"mr-2.5"}>
        <MeleeCard
          onClick={() => onIconClick?.(ArmyType.Melee)}
          disabledIcon={disabledStates?.melee}
        />
      </li>
      <li className={"mr-2.5"}>
        <RangedCard
          onClick={() => onIconClick?.(ArmyType.Ranged)}
          disabledIcon={disabledStates?.ranged}
        />
      </li>
      <li className={"mr-2.5"}>
        <SiegeCard
          onClick={() => onIconClick?.(ArmyType.Siege)}
          disabledIcon={disabledStates?.siege}
        />
      </li>
    </ul>
  );
};
