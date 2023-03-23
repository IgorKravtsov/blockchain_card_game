import { useAccount } from "wagmi";

export const useAuth = () => {
  return useAccount();
};
