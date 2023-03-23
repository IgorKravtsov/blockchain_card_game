import React, { useEffect } from "react";
import { useGetRoom } from "src/entities/Room/lib/hooks/useGetRoom";
import { BigNumber } from "ethers";

interface AddressWatcherProps {
  address: string;
  setBet: (bet: number) => void;
}

export const AddressWatcher: React.FC<AddressWatcherProps> = ({
  setBet,
  address,
}) => {
  const { data, refetch } = useGetRoom(address as `0x${string}`);

  useEffect(() => {
    console.log(data);
    const data1 = data as any;
    if (BigNumber.isBigNumber(data1?.bet)) {
      setBet(data1?.bet.toNumber());
    }
  }, [data, setBet]);

  useEffect(() => {
    refetch(address as `0x${string}`);
  }, [address, refetch]);

  return null;
};
