import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

import { routes } from "src/shared";

import { useConnectToFriend } from "../../lib/hooks/useConnectToFriend";

import { ConnectToFriendForm } from "./ConnectToFriendForm";
import { AddressWatcher } from "./AddressWatcher";

interface ConnectToFriendModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConnectToFriendModal: React.FC<ConnectToFriendModalProps> = ({
  onClose,
  open,
}) => {
  const [friendAddress, setFriendAddress] = useState("");
  const [bet, setBet] = useState(0);

  const { connectToFriend, isLoading, isSuccess } = useConnectToFriend(
    friendAddress as `0x${string}`,
    bet
  );

  const navigate = useNavigate();

  const handleConfirm = async () => {
    await connectToFriend?.();
    if (isSuccess) {
      onClose();
      navigate(`${routes.Round.Main}/${friendAddress}`);
    }
  };

  useEffect(() => {
    if (!open) {
      setBet(0);
      setFriendAddress("");
    }
  }, [open]);

  return (
    <Dialog open={open} handler={onClose}>
      {friendAddress.length > 5 && (
        <AddressWatcher address={friendAddress} setBet={setBet} />
      )}
      <DialogHeader>Connect to room of your friend</DialogHeader>
      <DialogBody divider>
        You can invite your friends to play with you. Please provide link to
        your friend.
        {bet > 0 && <h5 className={"mt-2"}>Bet of a room: {bet}</h5>}
        <ConnectToFriendForm
          setValue={setFriendAddress}
          value={friendAddress}
        />
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleConfirm}
          disabled={!bet || isLoading}
        >
          <span>{isLoading ? "Loading..." : "Connect"}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
