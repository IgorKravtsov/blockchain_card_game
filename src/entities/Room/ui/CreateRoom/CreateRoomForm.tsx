import React, { ChangeEvent } from "react";

import { Input } from "@material-tailwind/react";

interface CreateRoomFormProps {
  amount: number;
  setAmount: (value: number) => void;
  balance: number;
  setBalance: (value: number) => void;
}

export const CreateRoomForm: React.FC<CreateRoomFormProps> = ({
  amount,
  setAmount,
  balance,
  setBalance,
}) => {
  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value || 0));

  const handleChangeBalance = (e: ChangeEvent<HTMLInputElement>) =>
    setBalance(Number(e.target.value || 0));

  return (
    <form className={"mt-4"}>
      <Input
        label="Amout"
        type={"number"}
        onChange={handleChangeAmount}
        value={amount}
        required
      />
      <div className={"mt-4"}>
        <Input
          label="Initial balance"
          type={"number"}
          onChange={handleChangeBalance}
          value={balance}
          required
        />
      </div>
    </form>
  );
};
