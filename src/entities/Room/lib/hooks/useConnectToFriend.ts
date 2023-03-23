import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { WEB3_ABI, WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";

//address - address of creator of room
export const useConnectToFriend = (address: `0x${string}`, bet: number) => {
  const { config } = usePrepareContractWrite({
    address: WEB3_ADDRESS,
    abi: WEB3_ABI,
    args: [address],
    overrides: {
      value: bet,
    },
    functionName: "joinRoom",
  });
  const { writeAsync: connectToFriend, ...params } = useContractWrite(config);

  return { connectToFriend, ...params };
};
