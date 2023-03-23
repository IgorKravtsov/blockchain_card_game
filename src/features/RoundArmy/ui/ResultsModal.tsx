import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useGetRoom } from "src/entities/Room";
import { useAuth } from "src/shared";

interface ResultsModalProps {
  hostAddress: `0x${string}`;
  open: boolean;
  onClose: () => void;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  onClose,
  open,
  hostAddress,
}) => {
  const { address } = useAuth();

  const [text, setText] = useState("");

  const { data, refetch, isLoading, isRefetching, isError, isSuccess } =
    useGetRoom(hostAddress);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("refetching");
      if (!isLoading && !isRefetching) {
        refetch();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data, isError, isLoading, isRefetching, isSuccess, refetch]);

  useEffect(() => {
    const data1 = data as any; //TODO: WFT???
    if (data && data1.isFinished) {
      console.log("===data===", data);
      setText(data1.winner === address ? "You won!" : "You lost!");
    }
  }, [address, data]);

  return (
    <Dialog open={open} handler={() => {}}>
      <DialogHeader>Results</DialogHeader>
      <DialogBody divider>
        <h1 className={"font-black text-3xl"}>
          {!text ? "Waiting for other players to finish their rounds..." : text}
        </h1>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="green"
          onClick={onClose}
          disabled={!data}
        >
          <span>Got it</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
