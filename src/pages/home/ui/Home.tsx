import React from "react";
import { RoomList } from "src/entities/Room";
import { IRoom } from "src/shared/types/room.interface";
import { Container } from "src/shared/ui/Container/Container";

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
    <Container className={"mt-10"}>
      {/*<RoomList rooms={rooms} className={"mt-10"} />*/}
      <h1 className={"font-bold text-3xl"}>Best blockchain card game!</h1>
    </Container>
  );
};

export default Home;
