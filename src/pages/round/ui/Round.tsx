import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  routes,
  useAppDispatch,
  useAppSelector,
  useAuth,
} from "src/shared";

import {
  CardsToChoose,
  YourArmy,
  YourPoints,
  RoundNumber,
  roundArmyActions,
  selectRoundNumber,
  NextRoundBtn,
} from "src/features/RoundArmy";

import { useNavigate, useParams } from "react-router-dom";
import { useGetRoom } from "src/entities/Room";
import { ResultsModal } from "src/features/RoundArmy/ui/ResultsModal";

const Round: React.FC = () => {
  const roundNumber = useAppSelector(selectRoundNumber);
  const navigate = useNavigate();

  const { id: friendAddress } = useParams<{ id: `0x${string}` }>();
  const { data } = useGetRoom(friendAddress ?? "0x000");
  const { address } = useAuth();

  const dispatch = useAppDispatch();

  const [openResultModal, setOpenResultModal] = useState(false);

  const handleCloseResultModal = useCallback(() => {
    setOpenResultModal(false);
    navigate(routes.Home);
  }, [navigate]);

  useEffect(() => {
    return () => {
      dispatch(roundArmyActions.resetAllData());
    };
  }, [dispatch]);

  useEffect(() => {
    if (roundNumber === 1) {
      const data1 = data as any; // TODO: WTF???????
      console.log("===data1===", data1);
      console.log("===friendAddress===", friendAddress);
      const firstValues =
        address === friendAddress ? data1?.playerBalance : data1?.ownerBalance;
      dispatch(roundArmyActions.setFirstValues(firstValues?.toNumber()));
    }
  }, [dispatch, roundNumber, data, address, friendAddress]);

  useEffect(() => {
    navigate({
      search: `?round=${roundNumber}`,
    });
  }, [roundNumber, navigate]);

  return (
    <>
      <YourPoints className={"mb-5 fixed right-6"} />
      <Container className={"mt-10 relative mb-10"}>
        <RoundNumber />
        <CardsToChoose />
        <YourArmy className={"mt-10"} />
        <NextRoundBtn
          address={friendAddress as `0x${string}`}
          onFinish={() => setOpenResultModal(true)}
        />
        <ResultsModal
          hostAddress={address as `0x${string}`}
          open={openResultModal}
          onClose={handleCloseResultModal}
        />
      </Container>
    </>
  );
};

export default Round;
