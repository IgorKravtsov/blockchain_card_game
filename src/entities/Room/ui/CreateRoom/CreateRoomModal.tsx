import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { CreateRoomForm } from "./CreateRoomForm";
import { useCreateRoom } from "src/entities/Room/lib/hooks/useCreateRoom";
import { useNavigate } from "react-router-dom";
import { routes, useAuth } from "src/shared";

interface CreateRoomModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
  onClose,
  open,
}) => {
  const [amount, setAmount] = useState(1);
  const [initialBalance, setInitialBalance] = useState(1);

  const { address } = useAuth();
  const { createRoom } = useCreateRoom(initialBalance, amount);

  const navigate = useNavigate();

  const handleConfirm = async () => {
    await createRoom?.();
    console.log("===initialBalance===", initialBalance);
    onClose();
    navigate(routes.Round.Main + "/" + address);
    // setTimeout(() => {}, 10000);
  };

  return (
    <>
      <Dialog open={open} handler={onClose}>
        <DialogHeader>Create your own room</DialogHeader>
        <DialogBody divider>
          You will create a room for playing the game. You can invite your
          friends to play with you. Please enter the amount of money you want to
          play with.
          <CreateRoomForm
            setAmount={setAmount}
            amount={amount}
            balance={initialBalance}
            setBalance={setInitialBalance}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={onClose} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Create</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
