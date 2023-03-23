import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";

import { debounce } from "src/shared";

interface CreateRoomFormProps {
  value: string;
  setValue: (value: string) => void;
}

export const ConnectToFriendForm: React.FC<CreateRoomFormProps> = ({
  value,
  setValue,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <form className={"mt-4"}>
      <Input label="Address" onChange={handleChange} value={value} required />
    </form>
  );
};
