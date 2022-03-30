export type Comptoir = {
  "version": "0.1.0",
  "name": "comptoir",
  "instructions": [
    {
      "name": "createComptoir",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "comptoirNounce",
          "type": "u8"
        },
        {
          "name": "escrowNounce",
          "type": "u8"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "fees",
          "type": "u16"
        },
        {
          "name": "feesDestination",
          "type": "publicKey"
        },
        {
          "name": "authority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateComptoir",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionalFees",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "optionalFeesDestination",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "optionalAuthority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "updateComptoirMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowNounce",
          "type": "u8"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "feesDestination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "requiredVerifier",
          "type": "publicKey"
        },
        {
          "name": "fee",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "ignoreFee",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionalFee",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "optionalSymbol",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "optionalRequiredVerifier",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "optionalIgnoreCreatorFee",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "createSellOrder",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sellerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellOrder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "sellOrderNounce",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "quantity",
          "type": "u64"
        },
        {
          "name": "destination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeSellOrder",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sellerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellOrder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "quantityToUnlist",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerPayingTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "comptoirDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "askQuantity",
          "type": "u64"
        },
        {
          "name": "maxPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createBuyOffer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerPayingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "buyOfferNounce",
          "type": "u8"
        },
        {
          "name": "priceProposition",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeBuyOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPayingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "executeOffer",
      "accounts": [
        {
          "name": "seller",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoirDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerFundsDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowNounce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "comptoir",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fees",
            "type": "u16"
          },
          {
            "name": "feesDestination",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "sellOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "collection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "comptoirKey",
            "type": "publicKey"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "requiredVerifier",
            "type": "publicKey"
          },
          {
            "name": "fees",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "ignoreCreatorFee",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "buyOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "comptoir",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "proposedPrice",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ErrFeeShouldLowerOrEqualThan100",
      "msg": "Fee should be <= 100"
    },
    {
      "code": 6001,
      "name": "ErrTryingToUnlistMoreThanOwned",
      "msg": "Trying to unlist more than owned"
    },
    {
      "code": 6002,
      "name": "ErrItemPriceHigherThanMaxPrice",
      "msg": "Item price got higher than max price"
    },
    {
      "code": 6003,
      "name": "ErrCouldNotBuyEnoughItem",
      "msg": "Could not buy the required quantity of items"
    },
    {
      "code": 6004,
      "name": "ErrComptoirDoesNotHaveMint",
      "msg": "Trying to buy item with mint but only accepts sol"
    },
    {
      "code": 6005,
      "name": "ErrComptoirDoesNotAcceptSol",
      "msg": "Sol is not the right currency for this item"
    },
    {
      "code": 6006,
      "name": "ErrMetaDataMintDoesNotMatchItemMint",
      "msg": "metadata mint does not match item mint"
    },
    {
      "code": 6007,
      "name": "ErrNftNotPartOfCollection",
      "msg": "nft not part of collection"
    },
    {
      "code": 6008,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid"
    },
    {
      "code": 6009,
      "name": "ErrWrongTransferProgram",
      "msg": "Wrong transfer program"
    }
  ]
};

export const IDL: Comptoir = {
  "version": "0.1.0",
  "name": "comptoir",
  "instructions": [
    {
      "name": "createComptoir",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "comptoirNounce",
          "type": "u8"
        },
        {
          "name": "escrowNounce",
          "type": "u8"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "fees",
          "type": "u16"
        },
        {
          "name": "feesDestination",
          "type": "publicKey"
        },
        {
          "name": "authority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateComptoir",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionalFees",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "optionalFeesDestination",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "optionalAuthority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "updateComptoirMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowNounce",
          "type": "u8"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "feesDestination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "requiredVerifier",
          "type": "publicKey"
        },
        {
          "name": "fee",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "ignoreFee",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionalFee",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "optionalSymbol",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "optionalRequiredVerifier",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "optionalIgnoreCreatorFee",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "createSellOrder",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sellerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellOrder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "sellOrderNounce",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "quantity",
          "type": "u64"
        },
        {
          "name": "destination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeSellOrder",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "sellerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellOrder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "quantityToUnlist",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyerNftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerPayingTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "comptoirDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "askQuantity",
          "type": "u64"
        },
        {
          "name": "maxPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createBuyOffer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerPayingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        },
        {
          "name": "buyOfferNounce",
          "type": "u8"
        },
        {
          "name": "priceProposition",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeBuyOffer",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPayingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nounce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "executeOffer",
      "accounts": [
        {
          "name": "seller",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoir",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comptoirDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerFundsDestAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "buyOffer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowNounce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "comptoir",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fees",
            "type": "u16"
          },
          {
            "name": "feesDestination",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "sellOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "collection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "comptoirKey",
            "type": "publicKey"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "requiredVerifier",
            "type": "publicKey"
          },
          {
            "name": "fees",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "ignoreCreatorFee",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "buyOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "comptoir",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "proposedPrice",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ErrFeeShouldLowerOrEqualThan100",
      "msg": "Fee should be <= 100"
    },
    {
      "code": 6001,
      "name": "ErrTryingToUnlistMoreThanOwned",
      "msg": "Trying to unlist more than owned"
    },
    {
      "code": 6002,
      "name": "ErrItemPriceHigherThanMaxPrice",
      "msg": "Item price got higher than max price"
    },
    {
      "code": 6003,
      "name": "ErrCouldNotBuyEnoughItem",
      "msg": "Could not buy the required quantity of items"
    },
    {
      "code": 6004,
      "name": "ErrComptoirDoesNotHaveMint",
      "msg": "Trying to buy item with mint but only accepts sol"
    },
    {
      "code": 6005,
      "name": "ErrComptoirDoesNotAcceptSol",
      "msg": "Sol is not the right currency for this item"
    },
    {
      "code": 6006,
      "name": "ErrMetaDataMintDoesNotMatchItemMint",
      "msg": "metadata mint does not match item mint"
    },
    {
      "code": 6007,
      "name": "ErrNftNotPartOfCollection",
      "msg": "nft not part of collection"
    },
    {
      "code": 6008,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid"
    },
    {
      "code": 6009,
      "name": "ErrWrongTransferProgram",
      "msg": "Wrong transfer program"
    }
  ]
};