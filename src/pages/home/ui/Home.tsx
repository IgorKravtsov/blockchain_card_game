import React from "react";
import { IRoom } from "src/shared/types/room.interface";
import { CenterScreenContainer } from "src/shared/ui/Container/CenterScreenContainer";

const rooms: Omit<IRoom, "rounds">[] = [
  {
    owner: "owner1",
    bet: 100,
    ownerBalance: 1000,
    signature: 8375325789325923,
    playerBalance: 1000,
    player: "player1",
  },
  {
    owner: "owner1",
    bet: 100,
    ownerBalance: 1000,
    signature: 83753257893259213,
    playerBalance: 1000,
    player: "player1",
  },
];

const Home: React.FC = () => {
  return (
    <CenterScreenContainer className={"mt-10"}>
      {/*<RoomList rooms={rooms} className={"mt-10"} />*/}
      <h1 className={"font-bold text-3xl text-center text-deep-purple-700"}>
        Best blockchain card game!
      </h1>
    </CenterScreenContainer>
  );
};

export default Home;
