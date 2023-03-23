import { useContractRead } from "wagmi";
import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";

interface UseGetRoundParams {
  address: `0x${string}`;
  round: number;
}

export const useGetRound = ({ round, address }: UseGetRoundParams) => {
  return useContractRead({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    functionName: "getRound",
    args: [address, round],
  });
};
