import React from "react";
import cn from "classnames";

import { YourArmyList } from "src/features/RoundArmy/ui/YourArmyList";

interface YourArmyProps {
  className?: string;
}

export const YourArmy: React.FC<YourArmyProps> = ({ className }) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className={"text-2xl font-bold text-center mb-5"}>Your army</h2>
      <YourArmyList />
    </div>
  );
};
