## Qtum Testnet

1. Enter source code dir
2. Assuming tools `Solidity` & `Ethabi` are installed
3. Compile solidity code

        $ solc --optimize --bin --abi --hashes --allow-paths libs/* -o bodhitoken --overwrite tokens/BodhiToken.sol
        $ ls bodhitoken
        # corresponding files compiled
        BasicToken.abi           BodhiToken.bin           ERC20.signatures         Ownable.abi              SafeMath.bin             StandardToken.signatures
        BasicToken.bin           BodhiToken.signatures    ERC20Basic.abi           Ownable.bin              SafeMath.signatures      lib
        BasicToken.signatures    ERC20.abi                ERC20Basic.bin           Ownable.signatures       StandardToken.abi
        BodhiToken.abi           ERC20.bin                ERC20Basic.signatures    SafeMath.abi             StandardToken.bin

4. Ensure qtum testnet is running

        $ bin/qtumd -testnet -logevents
        # `-logevents` is optional for event log, you may be asked to add -reindex if existing local db is init without event logs

5. Generate owner address

        $ bin/qtum-cli -testnet getaccountaddress bodhi-owner
        qdghGtMxvfxPzdSJHNvJhN6gpzZSYdLDRN

        $ bin/qtum-cli -testnet listaccounts
        {
          "": 0.00000000,
          "bodhi-owner": 0.00000000
        }

    **Note: `testnet` addresses starts with `q` and `mainnet` addresses starts with `Q`**

    If your balance is 0, please request test tokens at [http://testnet-faucet.qtum.info/#!/](http://testnet-faucet.qtum.info/#!/) and verify it:

        $ bin/qtum-cli -testnet getbalance
        94.00000000

6. Copy previous compiled smartcontract binary code

        # mac only
        $ pbcopy < /yourpath/bodhitoken/BodhiToken.bin

7. Create contract using smartcontract binary code

        $ bin/qtum-cli -testnet createcontract 6060604052341561000f57600080fd5b60038054600160a060020a03191633600160a060020a031617905561080d806100396000396000f300606060405236156100c25763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166.... 2500000 0.0000004 qdghGtMxvfxPzdSJHNvJhN6gpzZSYdLDRN

        # Deployment succeeds:
        {
          "txid": "72b0f2eeeb29b6c3ebf5808ec075d07aeedbf37f546c007367ee50bb11300b60",
          "sender": "qdghGtMxvfxPzdSJHNvJhN6gpzZSYdLDRN",
          "hash160": "dcc48d3cfd6976545cb9bcf525ebad3a1b60d3bd",
          "address": "cde3c5db274b7f38377a66607c5a9ca6889dea3b"
        }
        # sender: should match your own account
        # address: the address for the deployed smart contract
        # hash160: hashed address of the sender

8. Verification: your new contract should appear when you `listcontracts`

        $ bin/qtum-cli -testnet listcontracts
        {
        "ddce483f940efe54a9f46f95486489b65092b68f": 0.00000000,
        ...
        }

    Get interface of smart contract

        $ bin/qtum-cli -testnet getaccountinfo ddce483f940efe54a9f46f95486489b65092b68f
        {
          "address": "ddce483f940efe54a9f46f95486489b65092b68f",
          "balance": 0,
          "storage": {
            "036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0": {
              "0000000000000000000000000000000000000000000000000000000000000005": "6800000000000000000000000000000000000000000000000000000000000002"
            },
            "405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace": {
              "0000000000000000000000000000000000000000000000000000000000000002": "00000000000000000000000000000000000000000000000000000000000001f4"
            },
            "8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b": {
              "0000000000000000000000000000000000000000000000000000000000000004": "0000000000000000000000000000000000000000000000000000000000000001"
            },
            "a50c72e4d7b00e75c6ec9cbfb411824ce1bc8c910cb84e72aed31d83c0caaf5a": {
              "e5d6541440c456f878016c6ac621d20fa7af44175ddebd0295194adfa766ddf6": "00000000000000000000000000000000000000000000000000000000000001f4"
            },
            "c2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b": {
              "0000000000000000000000000000000000000000000000000000000000000003": "7200000000000000000000000000000000000000000000000000000000000002"
            },
            "f652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f": {
              "0000000000000000000000000000000000000000000000000000000000000006": "48312e3000000000000000000000000000000000000000000000000000000008"
            }
          },
          "code": "606060405236156100ad576000357c0100000000000000000..."
        }

9. Call the smart contract

        $ cat /yourpath/bodhitoken/BodhiToken.signatures
        dd62ed3e: allowance(address,address)
        095ea7b3: approve(address,uint256)
        70a08231: balanceOf(address)
        313ce567: decimals()
        3542aee2: mintByOwner(address,uint256)
        06fdde03: name()
        8da5cb5b: owner()
        95d89b41: symbol()
        f7abab9e: tokenTotalSupply()
        18160ddd: totalSupply()
        a9059cbb: transfer(address,uint256)
        23b872dd: transferFrom(address,address,uint256)
        f2fde38b: transferOwnership(address)

    Calling a function. i.e. name()

        $ bin/qtum-cli -testnet callcontract cde3c5db274b7f38377a66607c5a9ca6889dea3b 06fdde03
        {
          "address": "cde3c5db274b7f38377a66607c5a9ca6889dea3b",
          "executionResult": {
            "gasUsed": 21839,
            "excepted": "None",
            "newAddress": "cde3c5db274b7f38377a66607c5a9ca6889dea3b",
            "output": "0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b426f64686920546f6b656e000000000000000000000000000000000000000000",
            "codeDeposit": 0,
            "gasRefunded": 0,
            "depositSize": 0,
            "gasForDeposit": 0
          },
          "transactionReceipt": {
            "stateRoot": "4f2fd1cc369abf4120a509dc4ffeac19e058ff5e5988d1609ee0b5996cbb752a",
            "gasUsed": 21839,
            "bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "log": [
            ]
          }
        }

    Decode output to verify the correctness

        $ ethabi decode params -t string 0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b426f64686920546f6b656e000000000000000000000000000000000000000000
        string Bodhi Token

10. `callcontract` vs `sendtocontract`

    `callcontract` - This will interact with an already deployed smart contract on the Qtum blockchain, with all computation taking place off-chain and no persistence to the blockchain. This does not require gas.

    `sendtocontract` - This will interact with an already deployed smart contract on the Qtum blockchain. All computation takes place on-chain and any state changes will be persisted to the blockchain. This allows tokens to be sent to a smart contract. This requires gas.
