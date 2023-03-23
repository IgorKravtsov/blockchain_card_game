import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";
import { BigNumber } from "ethers";

//address - address of creator of room
export const useConnectToFriend = (address: `0x${string}`, bet: number) => {
  const { config } = usePrepareContractWrite({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    args: [address],
    overrides: {
      value: bet,
      gasPrice: BigNumber.from(10000000000),
    },
    functionName: "joinRoom",
  });
  const { writeAsync: connectToFriend, ...params } = useContractWrite(config);

  return { connectToFriend, ...params };
};
