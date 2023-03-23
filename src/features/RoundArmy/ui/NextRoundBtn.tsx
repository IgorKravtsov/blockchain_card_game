import React from "react";
import { Button } from "@material-tailwind/react";

import { useAppDispatch, useAppSelector } from "src/shared";

import {
  roundArmyActions,
  selectCurrentPoints,
  selectRoundArmy,
  selectRoundNumber,
} from "../model/round-army.slice";
import { useMakeMove } from "src/features/RoundArmy/lib/hooks/useMakeMove";

interface NextRoundBtnProps {
  address: `0x${string}`;
  onFinish?: () => void;
}

export const NextRoundBtn: React.FC<NextRoundBtnProps> = ({
  address,
  onFinish,
}) => {
  const { meleeArmyCount, rangedArmyCount, siegeArmyCount } =
    useAppSelector(selectRoundArmy);
  const roundNumber = useAppSelector(selectRoundNumber);
  const currentPoints = useAppSelector(selectCurrentPoints);

  const { makeMove } = useMakeMove({
    address,
    round: roundNumber - 1,
    melee: meleeArmyCount,
    range: rangedArmyCount,
    siege: siegeArmyCount,
  });

  const dispatch = useAppDispatch();

  const isLastRound = roundNumber === 3;

  const handleClick = async () => {
    if (!isLastRound) {
      await makeMove?.();
      dispatch(roundArmyActions.nextRound());
      dispatch(roundArmyActions.resetArmy());
    } else {
      onFinish?.();
    }
  };

  return (
    <div className={"flex justify-end"}>
      <Button
        className={"mt-5"}
        onClick={handleClick}
        disabled={
          !currentPoints
            ? false
            : !meleeArmyCount && !rangedArmyCount && !siegeArmyCount
        }
      >
        {!isLastRound ? "Next round" : "Finish game"}
      </Button>
    </div>
  );
};
