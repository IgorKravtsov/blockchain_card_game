import { useContractRead } from "wagmi";
import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";

export const useGetInitialData = (): {
  meleePrice: number;
  rangePrice: number;
  siegePrice: number;
  isLoading: boolean;
} => {
  const { data: meleePrice, isLoading: meleeLoading } = useContractRead({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    functionName: "MEELE_PRICE",
  });

  const { data: rangePrice, isLoading: rangeLoading } = useContractRead({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    functionName: "RANGE_PRICE",
  });

  const { data: siegePrice, isLoading: siegeLoading } = useContractRead({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    functionName: "SIEGE_PRICE",
  });

  return {
    // @ts-ignore
    meleePrice: meleePrice?.toNumber() ?? 0,
    // @ts-ignore
    rangePrice: rangePrice?.toNumber() ?? 0,
    // @ts-ignore
    siegePrice: siegePrice?.toNumber() ?? 0,
    isLoading: meleeLoading || rangeLoading || siegeLoading,
  };
};
