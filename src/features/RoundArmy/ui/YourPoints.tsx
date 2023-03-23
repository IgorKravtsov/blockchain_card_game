import React, { ReactNode } from "react";
import cn from "classnames";
import { useAppSelector } from "src/shared";
import { selectCurrentPoints } from "src/features/RoundArmy/model/round-army.slice";

interface YourPointsProps {
  className?: string;
}

export const YourPoints: React.FC<YourPointsProps> = ({ className }) => {
  const currentPoints = useAppSelector(selectCurrentPoints);

  return (
    <div className={"flex justify-center"}>
      <h3
        className={cn(
          "text-2xl font-bold text-indigo-900 border-2 w-fit p-2.5 rounded-2xl border-indigo-900",
          className
        )}
      >
        Your points: {currentPoints}
      </h3>
    </div>
  );
};
