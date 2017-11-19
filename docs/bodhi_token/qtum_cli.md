# Downloads
* QT wallet/qtum-cli - find latest release and download installer:
    * [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases)
* Ethabi
    * [https://github.com/paritytech/ethabi](https://github.com/paritytech/ethabi) 

# Send BOT
1. Launch Qtum daemon: go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:

        $ ./qtumd --logevents

2. Open a new Terminal tab

3. Check for account: Make sure you have a valid Qtum address that has some QTUM (for the transaction fee) and BOT for transferring.

        $ ./qtum-cli listaccounts
        {
          "": -238.19753958,
          "deric": 248.78550718,
          "tester1": 15.08267720
        }
        # My example shows 2 accounts: deric & tester1. 
        # If you don’t see any accounts, go to Step 2. 
        # Otherwise, go to Step 3.

4. Creating an account

        $ ./qtum-cli getaccountaddress “yourAccountName”
        qdghGtMxvfxPzdSJHNvJhN6gpzZSYdLDRN

5. Transferring QTUM to your account: You will need some QTUM in your accounts to be able to transfer BOT. If you need to transfer some QTUM to your address from a different QTUM address.
    
    a. Encrypt wallet: [https://github.com/qtumproject/qtum/wiki/Qtum-Wallet-Tutorial](https://github.com/qtumproject/qtum/wiki/Qtum-Wallet-Tutorial)

    b. Save your passphrase words
    
    c. Unlock wallet

        $ ./qtum-cli walletpassphrase “your passphase words” numOfSecondsToKeepUnlocked

    d. Transfer QTUM

        $ ./qtum-cli sendtoaddress “addressToSendQtum” amountToSend
        de639bb266a4143d56fe24d64fe21d416847fcbc16cd51b8d4eeb04818af0628

    e. Wait until your transaction is confirmed. You can check with:

        $ ./qtum-cli gettransaction de639bb266a4143d56fe24d64fe21d416847fcbc16cd51b8d4eeb04818af0628

6. Transfer Bodhi Tokens using transfer(address, uint256)

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

    This data string is hex of data which consists of function name, value of parameters. All parts of hex strings need to be concatenated together with no space in between.

    * Function name: transfer() = function signature: `a9059cbb`
    * First param: address param = Recipient address of BOT. Need to get the encoded address first

            $ ./qtum-cli gethexaddress QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF
            # hash address:
            d965cdc9eff7412a278cd9dd7dc32e022b7bada4
  
            $ ethabi encode params -v address d965cdc9eff7412a278cd9dd7dc32e022b7bada4
            # encoded address with ethabi
            000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada4

    * Second parameter: uint256 param = amount to send to in lowest denomination of BOT (Botoshi). 

            $ ethabi encode params -v uint 10000 --lenient
            0000000000000000000000000000000000000000000000000000000000002710

    Now we have all the params we need encoded properly:

        a9059cbb000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada40000000000000000000000000000000000000000000000000000000000002710

    Finally the last arguments in the call:

    * `amount` = 0
    * `gasLimit` = 250000
    * `gasPrice` = 0.0000004
    * `senderAddress` = QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF

    Execute the transfer():

        $ ./qtum-cli sendtocontract f13f51550faaf698d09fdcc74d79335bfe19e062 a9059cbb000000000000000000000000d965cdc9eff7412a278cd9dd7dc32e022b7bada40000000000000000000000000000000000000000000000000000000000002710 0 250000 0.0000004 QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF
        # transaction receipt
        {
          "txid": "25af2f8cc32e76b52b39175336612f0ae568906216667e6482421edce2909f72",
          "sender": "QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF",
          "hash160": "d965cdc9eff7412a278cd9dd7dc32e022b7bada4"
        }

7. Check the BOT balance of your address

        # $ ./qtum-cli callcontract contractAddress dataHex
        # dataHex = function signature: 70a08231 + encodedAddressToCheckBalanceOf
        $ ./qtum-cli callcontract f13f51550faaf698d09fdcc74d79335bfe19e062 70a082310000000000000000000000004cb69aae6761e52413b948ad10689cc2428e2ef7
        {
          "address": "a619b1a87d4f17fb56e347887b971094918b016c",
          "executionResult": {
            "gasUsed": 23404,
            "excepted": "None",
            "newAddress": "a619b1a87d4f17fb56e347887b971094918b016c",
            "output": "000000000000000000000000000000000000000000000000000000000000015e", <--
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

    `output: 000000000000000000000000000000000000000000000000000000000000015e`

    This is the hex return value of `balanceOf()`. Converted to decimals, it is `350`.

# Receive BOT
1. Launch Qtum daemon: go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:

        $ ./qtumd

2. Open a new Terminal tab
3. List your accounts:

        $ ./qtum-cli listaccounts
        {
          "": -569.38821838,
          "deric": 576.02622998,
          "tester1": 15.08267720
        }

4. Find the addresses of your accounts:

        $ ./qtum-cli getaddressesbyaccount deric
        [
          "qQZ1GB4db8jVaBmzyw7dsoSDqEAGN7Bfov", 
          "qQnvzVjK2xASAkvEwfmEAiG2vZPUQrF6Cg"
        ]

5. Pick an address to receive and give that to the person sending you the BOT

# Parse Events with ethabi
1. Launch Qtum daemon: go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:

        $ ./qtumd

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
