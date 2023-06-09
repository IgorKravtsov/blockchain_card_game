export const WEB3_ADDRESS = "0xE086B58Db0366575bD1ee7b280260EE064a13869";

export const WEB3_ABI = [
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
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
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
];
