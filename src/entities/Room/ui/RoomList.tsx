import React from "react";
import cn from "classnames";

import { RoomCard } from "./RoomCard";

import { IRoom } from "src/shared";

interface RoomListProps {
  rooms: Omit<IRoom, "rounds">[];
  className?: string;
}

export const RoomList: React.FC<RoomListProps> = ({ className, rooms }) => {
  return (
    <ul className={cn("flex flex-wrap", className)}>
      {rooms.map((room) => (
        <li className={"shadow-xl mr-10 mt-9 ml-12"} key={room.signature}>
          <RoomCard room={room} />
        </li>
      ))}
    </ul>
  );
};
