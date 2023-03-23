import React, { ReactNode } from "react";
import cn from "classnames";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { color } from "@material-tailwind/react/types/components/button";

export interface ArmyCardProps {
  armyName: string;
  price: number;
  onClick?: () => void;
  cardImage?: string;
  className?: string;
  defaultSize?: boolean;
  icon?: ReactNode;
  helperText?: string;
  showPrice?: boolean;
  iconColor?: color;
  disabledIcon?: boolean;
}

export const ArmyCard: React.FC<ArmyCardProps> = ({
  armyName,
  cardImage,
  price,
  onClick,
  className,
  defaultSize = true,
  icon,
  helperText,
  showPrice = true,
  iconColor = "green",
  disabledIcon = false,
}) => {
  return (
    <Card
      className={cn(
        "relative grid items-end justify-center overflow-hidden text-center shadow-2xl",
        className,
        { "w-[220px] h-[20rem]": defaultSize }
      )}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={cn(
          "absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center",
          cardImage
        )}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        <IconButton
          size="lg"
          color={iconColor}
          variant="gradient"
          className="!absolute top-4 right-4 rounded-full"
          onClick={onClick}
          disabled={disabledIcon}
        >
          {icon ?? <PlusIcon className="h-6 w-6" />}
        </IconButton>
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {armyName}
        </Typography>
        {showPrice && (
          <Typography variant="h5" className="mb-4 text-gray-400">
            Price: {price}
          </Typography>
        )}
        {helperText && <Chip variant={"gradient"} value={helperText} />}
      </CardBody>
    </Card>
  );
};
