export const TalentLayerServiceAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minimumTransactionAmount",
        type: "uint256",
      },
    ],
    name: "AllowedTokenListUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "serviceId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum TalentLayerService.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rateToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rateAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "platformId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "serviceId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rateToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rateAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_expirationDate",
        type: "uint256",
      },
    ],
    name: "ProposalUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ServiceCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
    ],
    name: "ServiceCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
    ],
    name: "ServiceDetailedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "TrustedForwarderAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "TrustedForwarderRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ESCROW_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_forwarder",
        type: "address",
      },
    ],
    name: "addTrustedForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_transactionId",
        type: "uint256",
      },
    ],
    name: "afterDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
    ],
    name: "afterFullPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedTokenList",
    outputs: [
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "minimumTransactionAmount",
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
        name: "_profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
    ],
    name: "cancelService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rateToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rateAmount",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_platformId",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "_dataUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_expirationDate",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_platformId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_dataUri",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "createService",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        components: [
          {
            internalType: "enum TalentLayerService.ProposalStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ownerId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rateToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "rateAmount",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "platformId",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "dataUri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
        ],
        internalType: "struct TalentLayerService.Proposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
    ],
    name: "getService",
    outputs: [
      {
        components: [
          {
            internalType: "enum TalentLayerService.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ownerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "acceptedProposalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "dataUri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "platformId",
            type: "uint256",
          },
        ],
        internalType: "struct TalentLayerService.Service",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_talentLayerIdAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_talentLayerPlatformIdAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "isTokenAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextServiceId",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "nonce",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "enum TalentLayerService.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "ownerId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rateToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rateAmount",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "platformId",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_forwarder",
        type: "address",
      },
    ],
    name: "removeTrustedForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "services",
    outputs: [
      {
        internalType: "enum TalentLayerService.Status",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "ownerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "acceptedProposalId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "dataUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "platformId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "talentLayerPlatformIdContract",
    outputs: [
      {
        internalType: "contract ITalentLayerPlatformID",
        name: "",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_minimumTransactionAmount",
        type: "uint256",
      },
    ],
    name: "updateAllowedTokenList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rateToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rateAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_dataUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_expirationDate",
        type: "uint256",
      },
    ],
    name: "updateProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_serviceId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_dataUri",
        type: "string",
      },
    ],
    name: "updateServiceData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;
