import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { BigNumber } from "ethers";
import { useAuth } from "src/shared";

import { WEB3_ADDRESS } from "src/shared/constants/WEB3_ADDRESS";

export const useCreateRoom = (initialBalance: number, bet: number) => {
  const { config } = usePrepareContractWrite({
    address: WEB3_ADDRESS,
    abi: [
      {
        inputs: [],
        name: "MEELE_PRICE",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "RANGE_PRICE",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "SIEGE_PRICE",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "initialBalance",
            type: "uint256",
          },
        ],
        name: "createRoom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "getRoom",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "bet",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "ownerBalance",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "player",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "playerBalance",
                type: "uint256",
              },
            ],
            internalType: "struct Laba.ReturnRoom",
            name: "_room",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "round",
            type: "uint256",
          },
        ],
        name: "getRound",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "meele",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "range",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "siege",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isFinished",
                type: "bool",
              },
            ],
            internalType: "struct Laba.Army",
            name: "_ownerArmy",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "meele",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "range",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "siege",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isFinished",
                type: "bool",
              },
            ],
            internalType: "struct Laba.Army",
            name: "_playerArmy",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "_winner",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "joinRoom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "round",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "meele",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "range",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "siege",
            type: "uint256",
          },
        ],
        name: "makeMove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    args: [BigNumber.from(initialBalance)],
    functionName: "createRoom",
    overrides: {
      value: bet,
      gasLimit: BigNumber.from(1_000_000),
    },
  });
  const { writeAsync: createRoom, ...params } = useContractWrite(config);
  return { createRoom, ...params };
};
