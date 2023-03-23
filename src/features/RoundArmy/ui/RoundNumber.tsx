import React, { ReactNode } from "react";
import cn from "classnames";
import { useAppSelector } from "src/shared";
import { selectRoundNumber } from "src/features/RoundArmy/model/round-army.slice";

interface RoundNumberProps {
  className?: string;
}

export const RoundNumber: React.FC<RoundNumberProps> = ({ className }) => {
  const roundNumber = useAppSelector(selectRoundNumber);

  return (
    <h2 className={cn("text-4xl font-bold text-center mb-5", className)}>
      Round: {roundNumber}
    </h2>
  );
};
