import { useState } from "react";

export const useModal = <T = any>() => {
  const [openedId, setOpenedId] = useState<T | null>(null);

  return {
    isModalOpened: (id: T) => openedId === id,
    openModal: (id: T) => setOpenedId(id),
    closeModal: () => setOpenedId(null),
  };
};
