import React, { Suspense, useEffect } from "react";

import { Header } from "src/widgets/Header";

import { useModal, useGetInitialData, useAppDispatch } from "src/shared";

import { AppRouter } from "./AppRouter";
import { CreateRoomModal } from "src/entities/Room";
import { roundArmyActions } from "src/features/RoundArmy";

type AppModals = "createRoom" | "connectToFriend";

const App = () => {
  const initialPrice = useGetInitialData();
  const { openModal, isModalOpened, closeModal } = useModal<AppModals>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const { meleePrice, rangePrice, siegePrice } = initialPrice;
    if (meleePrice && rangePrice && siegePrice) {
      dispatch(roundArmyActions.updateInitialData(initialPrice));
    }
  }, [dispatch, initialPrice]);

  return (
    <>
      <Header onCreateClick={() => openModal("createRoom")} />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
      <CreateRoomModal
        open={isModalOpened("createRoom")}
        onClose={closeModal}
      />
    </>
  );
};

export default App;
