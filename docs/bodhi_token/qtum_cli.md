# Downloads
* QT wallet/qtum-cli - find latest release and download installer:
    * [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases)
* Ethabi
    * [https://github.com/paritytech/ethabi](https://github.com/paritytech/ethabi) 

# Launch Qtum daemon
In your Terminal window, go to your `qtum-x.xx.x/bin` folder that you installed it in and run:
    
    $ ./qtumd --logevents 

To reindex the chain:

    $ ./qtumd --logevents --reindex

# Encode address to hex

    $ ./qtum-cli gethexaddress QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF
    # hash address:
    d965cdc9eff7412a278cd9dd7dc32e022b7bada4
  
    $ ethabi encode params -v address d965cdc9eff7412a278cd9dd7dc32e022b7bada4
    # encoded address with ethabi (padded to 32 bytes):
    000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4

# Send BOT
1. [Launch Qtum daemon](#launch-qtum-daemon)
2. Open a new Terminal tab
3. Transfer BOT using `transfer(address, uint256)`:

        # sendtocontract help
        Arguments:
        1. "contractAddress" (string, required) The contract address that will receive the funds and data.
        2. "dataHex"  (string, required) data to send.
        3. "amount"      (numeric or string, optional) The amount in QTUM to send. eg 0.1, default: 0
        4. gasLimit  (numeric or string, optional) gasLimit, default: 250000, max: 40000000
        5. gasPrice  (numeric or string, optional) gasPrice Qtum price per gas unit, default: 0.0000004, min:0.0000004
        6. "senderAddress" (string, optional) The quantum address that will be used as sender.

        $ ./qtum-cli sendtocontract contractAddress dataHex amount gasLimit gasPrice senderAddress

    Constructing the `dataHex` for `transfer(address, uint256)`:

    This data string is a hex string of data which consists of the function name and it's parameters. All parts of hex strings need to be concatenated together with no space in between. Each parameter should be encoded to 32 bytes.

    * Function name: `transfer(address,uint256)` = [function signature](info.md#function-signatures): `a9059cbb`
    * First param: `address` = recipient [encoded address](#encode-address-to-hex) to send BOT to: `000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4`
    * Second parameter: `uint256` = amount to send to in lowest denomination of BOT (Botoshi). 

            $ ethabi encode params -v uint 10000 --lenient
            0000000000000000000000000000000000000000000000000000000000002710

    Now we have all the params we need encoded properly:

        a9059cbb # function param
        000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4 # address param
        0000000000000000000000000000000000000000000000000000000000002710 # uint256 param

        # dataHex concatenated without any spaces:
        a9059cbb000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada40000000000000000000000000000000000000000000000000000000000002710

    Finally the last arguments needed in the call:

        # other parameters needed:
        # amount = 0 (no QTUM to send)
        # gasLimit = 250000 (default)
        # gasPrice = 0.0000004 (default)
        # senderAddress = QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF (address that is transferring BOT)

    Execute the transfer():

        $ ./qtum-cli sendtocontract f13f51550faaf698d09fdcc74d79335bfe19e062 a9059cbb000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada40000000000000000000000000000000000000000000000000000000000002710 0 250000 0.0000004 QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF
        # transaction receipt
        {
          "txid": "25af2f8cc32e76b52b39175336612f0ae568906216667e6482421edce2909f72",
          "sender": "QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF",
          "hash160": "d965cdc9eff7412a278cd9dd7dc32e022b7bada4"
        }

5. Check for transaction to be mined:
    
        # $ ./qtum-cli gettransaction txid
        $ ./qtum-cli gettransaction 25af2f8cc32e76b52b39175336612f0ae568906216667e6482421edce2909f72

        # look at "confirmations" to be 1 or more
        {
            "amount": 0.00000000,
            "fee": -0.10120000,
            "confirmations": 0, # once this hits 1 confirmation, you can check the balance
            "blockhash": "c7eb9ff50dafc4c8c0b0e519eeea8dc98be5209d82e2a49c88be6173796bef75",
            "blockindex": 2,
            "blocktime": 1511152112,
            "txid": "25af2f8cc32e76b52b39175336612f0ae568906216667e6482421edce2909f72",
            "walletconflicts": [
            ],
            "time": 1511152081,
            "timereceived": 1511152081,
            "bip125-replaceable": "no",
            "details": [
            {
              "account": "",
              "category": "send",
              "amount": 0.00000000,
              "vout": 0,
              "fee": -0.10120000,
              "abandoned": false
            }, 
            {
              "account": "",
              "address": "qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy",
              "category": "send",
              "amount": -91.78832400,
              "label": "main",
              "vout": 1,
              "fee": -0.10120000,
              "abandoned": false
            }, 
            {
              "account": "main",
              "address": "qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy",
              "category": "receive",
              "amount": 91.78832400,
              "label": "main",
              "vout": 1
            }
            ],
            "hex": "020000000106752a723b35434e877b7b4bf30635df1a46690563711324721dec800e38d79d000000006b483045022100de725038c8d2e1474b88f0c04121f18ad644596b527f65ff43732e5ee47394360220240812330bcf00a41e79e63f3e2d660d76e4dc13286653015385e5dff2638b8e0121038e8b6337a06712e40277d339b4643897e62b337b66eea2d8dd069812d7feb0a3feffffff0200000000000000006301040390d003012844a9059cbb00000000000000000000000074fafd43036239029a5dabc9463009daf4ef4a7c0000000000000000000000000000000000000000000000000000000005f5e10014f6177bc9812eeb531907621af6641a41133dea9ec210de1923020000001976a91417e7888aa7412a735f336d2f6d784caefabb6fa388ac8b8a0000"
        }

# Receive BOT
1. [Launch Qtum daemon](#launch-qtum-daemon)
2. Open a new Terminal tab
3. List your accounts:

        $ ./qtum-cli listaddressgroupings
        [
          [
            [
              "qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy", 
              91.78832400, 
              "main"
            ]
          ]
        ]

4. Pick an address to receive and give that to the person sending you the BOT

# Check BOT balance
1. [Launch Qtum daemon](#launch-qtum-daemon)
2. Use `callcontract` to check the balance:

    * Function name: `balanceOf(address)` = [function signature](info.md#function-signatures): `70a08231`
    * First param: `address` = [encoded address](#encode-address-to-hex) to check balanceOf

            # $ ./qtum-cli callcontract contractAddress dataHex
            # dataHex:
            # function signature: 70a08231 
            # address: 0000000000000000000000004cb69aae6761e52413b948ad10689cc2428e2ef7
            $ ./qtum-cli callcontract f13f51550faaf698d09fdcc74d79335bfe19e062 70a082310000000000000000000000004cb69aae6761e52413b948ad10689cc2428e2ef7
            {
              "address": "a619b1a87d4f17fb56e347887b971094918b016c",
              "executionResult": {
                "gasUsed": 23404,
                "excepted": "None",
                "newAddress": "a619b1a87d4f17fb56e347887b971094918b016c",
                "output": "000000000000000000000000000000000000000000000000000000000000015e", # result
                "codeDeposit": 0,
                "gasRefunded": 0,
                "depositSize": 0,
                "gasForDeposit": 0
              },
              "transactionReceipt": {
                "stateRoot": "a040c9b3ba184d57ae0942fb70dfdeba9c436809ec66c855b2d15441c46824d8",
                "gasUsed": 23404,
                "bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                "log": [
                ]
              }
            }

            # output: 000000000000000000000000000000000000000000000000000000000000015e
            # converted to decimal format = 350

# Parse Events with ethabi
1. [Launch Qtum daemon](#launch-qtum-daemon)
2. Open a new Terminal tab
3. Copy the [ABI](info.md#interface-abi) to a file named `BodhiToken.json` and save it
4. How to construct the `ethabi decode log`

        ethabi decode log <abi-path> <event-name> [-l <topic>]... <data>
        # note that each "topic" needs to be preceeded by "-l"

5. Parsing event Transfer(address indexed _from, address indexed _to, uint256 _value):
    
    a. Get all Transfer events
        
        $ ./qtum-cli searchlogs 1 -1 '{"addresses": ["6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7"]}' '{"topics": ["ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]}'
        # searchlogs = command to search through transactions on the blockchain
        # 1 = starting block number
        # -1 = ending block number (-1 goes to the latest block)
        # addresses = BOT contract address
        # topics = hashes of the events to watch, ie. this is the hash of the Transfer event.

        # sample Transfer event fetched from searchlogs call
        [
            {
                "blockHash": "c79bcecae6bc7611b56960be0c3c2041f9e3ebfc2e73da0357462078361ba06f",
                "blockNumber": 46831,
                "transactionHash": "32c6874925aa0d400fad4c655283ab6c18d84c003f4e4f8c3cac32675d2eff5b",
                "transactionIndex": 8,
                "from": "d965cdc9eff7412a278cd9dd7dc32e022b7bada4",
                "to": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                "cumulativeGasUsed": 21422, 
                "gasUsed": 21422,
                "contractAddress": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                "log": [
                    {
                        "address": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                        "topics": [
                            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", 
                            "000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4", 
                            "000000000000000000000000c0d3421708f1574e00959c082e75a77ff4770bed"
                        ],
                        "data": "0000000000000000000000000000000000000000000000000000000005f5e100"
                    }
                ]
            }
        ]

    b. Parse the Transfer event:

        $ ethabi decode log ~/Desktop/BodhiToken.json Transfer -l ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef -l 000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4 -l 000000000000000000000000c0d3421708f1574e00959c082e75a77ff4770bed 0000000000000000000000000000000000000000000000000000000005f5e100

        _from d965cdc9eff7412a278cd9dd7dc32e022b7bada4
        _to c0d3421708f1574e00959c082e75a77ff4770bed
        _value 0000000000000000000000000000000000000000000000000000000005f5e100
        # the values "_from", "_to", and "_value" are printed out neatly

6. Parsing event Mint(uint256 supply, address indexed to, uint256 amount):
    
    a. Get all Mint events:
        
        $ ./qtum-cli searchlogs 1 -1 '{"addresses": ["6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7"]}' '{"topics": ["4e3883c75cc9c752bb1db2e406a822e4a75067ae77ad9a0a4d179f2709b9e1f6"]}'

        # sample Mint event fetched from searchlogs call
        [
            {
                "blockHash": "8d30c1b633b5dd90f159f146e0f919b2b6271afa8c302d06fb4ed04ec733c0b8",
                "blockNumber": 46828,
                "transactionHash": "ba58122f413cb00ca83262f6be87c57b48b08bf100d90ebb5285c84b018f1d2c",
                "transactionIndex": 9,
                "from": "d965cdc9eff7412a278cd9dd7dc32e022b7bada4",
                "to": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                "cumulativeGasUsed": 51789,
                "gasUsed": 51789,
                "contractAddress": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                "log": [
                    {
                        "address": "6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7",
                        "topics": [
                            "4e3883c75cc9c752bb1db2e406a822e4a75067ae77ad9a0a4d179f2709b9e1f6", 
                            "000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4"
                        ],
                        "data": "00000000000000000000000000000000000000000000000000038d7ec889c6000000000000000000000000000000000000000000000000000000000005f5e100"
                    }
                ]
            }
        ]

    b. Parse the Mint event:

        $ ethabi decode log ~/Desktop/BodhiToken.json Mint -l 4e3883c75cc9c752bb1db2e406a822e4a75067ae77ad9a0a4d179f2709b9e1f6 -l 000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4 00000000000000000000000000000000000000000000000000038d7ec889c6000000000000000000000000000000000000000000000000000000000005f5e100

        supply 00000000000000000000000000000000000000000000000000038d7ec889c600
        to d965cdc9eff7412a278cd9dd7dc32e022b7bada4
        amount 0000000000000000000000000000000000000000000000000000000005f5e100
        # this neatly prints out the values for "supply", "to", and "amount"
