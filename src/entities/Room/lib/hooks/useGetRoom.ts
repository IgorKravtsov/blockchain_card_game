import { useContractRead } from "wagmi";
import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";

export const useGetRoom = (address: `0x${string}`) => {
  return useContractRead({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    args: [address],
    functionName: "getRoom",
  });
};
