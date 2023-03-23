import React, { memo } from "react";
import { Typography } from "@material-tailwind/react";
import { useModal } from "src/shared";
import { ConnectToFriendModal } from "src/entities/Room";

interface ConnectToFriendProps {}

type Modal = "connectToFriend";

const ConnectToFriend: React.FC<ConnectToFriendProps> = () => {
  const { openModal, isModalOpened, closeModal } = useModal<Modal>();
  return (
    <>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
        onClick={() => openModal("connectToFriend")}
      >
        Connect to friend
      </Typography>
      <ConnectToFriendModal
        open={isModalOpened("connectToFriend")}
        onClose={closeModal}
      />
    </>
  );
};

export default memo(ConnectToFriend);
