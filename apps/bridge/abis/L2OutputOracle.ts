export const L2OutputOracleAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_submissionInterval",
        type: "uint256",
      },
      { internalType: "uint256", name: "_l2BlockTime", type: "uint256" },
      {
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingTimestamp",
        type: "uint256",
      },
      { internalType: "address", name: "_proposer", type: "address" },
      { internalType: "address", name: "_challenger", type: "address" },
      {
        internalType: "uint256",
        name: "_finalizationPeriodSeconds",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "outputRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "l2OutputIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "l2BlockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "l1Timestamp",
        type: "uint256",
      },
    ],
    name: "OutputProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "prevNextOutputIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newNextOutputIndex",
        type: "uint256",
      },
    ],
    name: "OutputsDeleted",
    type: "event",
  },
  {
    inputs: [],
    name: "CHALLENGER",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FINALIZATION_PERIOD_SECONDS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "L2_BLOCK_TIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SUBMISSION_INTERVAL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_l2BlockNumber", type: "uint256" },
    ],
    name: "computeL2Timestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_l2OutputIndex", type: "uint256" },
    ],
    name: "deleteL2Outputs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_l2OutputIndex", type: "uint256" },
    ],
    name: "getL2Output",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "outputRoot",
            type: "bytes32",
          },
          { internalType: "uint128", name: "timestamp", type: "uint128" },
          {
            internalType: "uint128",
            name: "l2BlockNumber",
            type: "uint128",
          },
        ],
        internalType: "struct Types.OutputProposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_l2BlockNumber", type: "uint256" },
    ],
    name: "getL2OutputAfter",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "outputRoot",
            type: "bytes32",
          },
          { internalType: "uint128", name: "timestamp", type: "uint128" },
          {
            internalType: "uint128",
            name: "l2BlockNumber",
            type: "uint128",
          },
        ],
        internalType: "struct Types.OutputProposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_l2BlockNumber", type: "uint256" },
    ],
    name: "getL2OutputIndexAfter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingTimestamp",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestBlockNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestOutputIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextBlockNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextOutputIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_outputRoot", type: "bytes32" },
      {
        internalType: "uint256",
        name: "_l2BlockNumber",
        type: "uint256",
      },
      { internalType: "bytes32", name: "_l1BlockHash", type: "bytes32" },
      { internalType: "uint256", name: "_l1BlockNumber", type: "uint256" },
    ],
    name: "proposeL2Output",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "startingBlockNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startingTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
