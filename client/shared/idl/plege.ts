export type Plege = {
  "version": "0.1.0",
  "name": "plege",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "userMeta",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "USER_META"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "auth"
              }
            ]
          }
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createNl",
      "accounts": [
        {
          "name": "nl",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "APP"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "auth"
              },
              {
                "kind": "arg",
                "type": "u8",
                "path": "nl_id"
              }
            ]
          }
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nlId",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "createSubscription",
      "accounts": [
        {
          "name": "nl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subscription",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "SUBSCRIPTION"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Nl",
                "path": "nl"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "subscriber"
              }
            ]
          }
        },
        {
          "name": "subscriber",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelSubscription",
      "accounts": [
        {
          "name": "nl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subscription",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "SUBSCRIPTION"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Nl",
                "path": "nl"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "subscriber"
              }
            ]
          }
        },
        {
          "name": "subscriber",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initNl",
      "accounts": [
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "genesisPostAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "signupUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "updatePost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "deletePost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextPostAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "deleteLatestPost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "nlState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentPostKey",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "avatar",
            "type": "string"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "postState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "prePostKey",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "nl",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "nlName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "subscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nl",
            "type": "publicKey"
          },
          {
            "name": "subscriber",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "numNls",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "PostEvent",
      "fields": [
        {
          "name": "label",
          "type": "string",
          "index": false
        },
        {
          "name": "postId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nextPostId",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    }
  ]
};

export const IDL: Plege = {
  "version": "0.1.0",
  "name": "plege",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "userMeta",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "USER_META"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "auth"
              }
            ]
          }
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createNl",
      "accounts": [
        {
          "name": "nl",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "APP"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "auth"
              },
              {
                "kind": "arg",
                "type": "u8",
                "path": "nl_id"
              }
            ]
          }
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nlId",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "createSubscription",
      "accounts": [
        {
          "name": "nl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subscription",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "SUBSCRIPTION"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Nl",
                "path": "nl"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "subscriber"
              }
            ]
          }
        },
        {
          "name": "subscriber",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelSubscription",
      "accounts": [
        {
          "name": "nl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subscription",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "SUBSCRIPTION"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Nl",
                "path": "nl"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "subscriber"
              }
            ]
          }
        },
        {
          "name": "subscriber",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initNl",
      "accounts": [
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "genesisPostAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "signupUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateUser",
      "accounts": [
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "updatePost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "deletePost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextPostAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "deleteLatestPost",
      "accounts": [
        {
          "name": "postAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nlAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "nlState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentPostKey",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "avatar",
            "type": "string"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "postState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "prePostKey",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "nl",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "nlName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "subscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nl",
            "type": "publicKey"
          },
          {
            "name": "subscriber",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "numNls",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "PostEvent",
      "fields": [
        {
          "name": "label",
          "type": "string",
          "index": false
        },
        {
          "name": "postId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nextPostId",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    }
  ]
};
