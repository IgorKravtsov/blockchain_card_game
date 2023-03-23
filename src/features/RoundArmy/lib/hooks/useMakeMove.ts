import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";
import { BigNumber } from "ethers";

interface UseMakeMoveArgs {
  address: `0x${string}`;
  round: number;
  melee: number;
  range: number;
  siege: number;
}

export const useMakeMove = ({
  address,
  range,
  siege,
  round,
  melee,
}: UseMakeMoveArgs) => {
  const { config } = usePrepareContractWrite({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    functionName: "makeMove",
    args: [address, round, melee, range, siege],
    overrides: {
      gasLimit: BigNumber.from(1_000_000),
    },
  });
  const { writeAsync: makeMove, ...params } = useContractWrite(config);

  return { makeMove, ...params };
};
