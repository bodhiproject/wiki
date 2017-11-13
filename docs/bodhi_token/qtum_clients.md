# Environment Prerequisites
* QTUM - find latest release and download installer from [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases)
* Ethabi (if using the CLI) - [https://github.com/paritytech/ethabi](https://github.com/paritytech/ethabi) 

# Convert Qtum Address to Hash
1. With QT Wallet open, select Help > Debug window
2. Select the Console tab
3. Type the command: `gethexaddress (yourQtumAddress)`
4. Output is the hash address

# Send BOT using QTUM mobile app
1. Download the mobile app:
    * Android: [https://play.google.com/store/apps/details?id=org.qtum.wallet&hl=en](https://play.google.com/store/apps/details?id=org.qtum.wallet&hl=en)
    * iOS: [https://itunes.apple.com/us/app/qtum-wallet/id1277563210?mt=8](https://itunes.apple.com/us/app/qtum-wallet/id1277563210?mt=8)
2. Launch the app
3. Click on `Profile` tab
4. Click on `Smart Contracts`
5. Click on `Watch Token`
6. Add `Token Name`: BOT
7. Copy/paste the `Token Address` (see [Deployed Contracts](info.md#deployed-contracts) Mainnet address above)
8. Copy/paste the `ABI Interface` (see [Interface (ABI)](info.md#interface-abi) above)
9. Click `OK` button
10. Click on `Send` Tab
11. Add the `Receiver's Address` of the person you want to send BOT to
12. Click `Choose Token` dropdown and select `BOT`
13. Enter the `Amount` to send (in [Botoshi](info.md#bot-units))
14. Click the `Send` button
15. Wait for the transaction to be mined

# Watch BOT in QT Wallet
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```
2. In the `Overview` tab, click the `Add Token` button
3. Copy/paste the token address in `Contract Address`
4. Select the `Token Address` which you would like to monitor BOT activity on
5. Click on the `Confirm` button
6. You should now see `BOT` being monitored in the `Overview` and `QRC Token` tabs

# Send BOT using QT Wallet (Easy)
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```
2. Add Bodhi Token to your QT Wallet (see above)
3. In the `QRC Token` tab, click the `Send` button
4. In the `PayTo` field, add the address you would like to send BOT to
5. In the `Amount` field, type in the amount to send (in [Botoshi](info.md#bot-units))
6. (Optional) In the `Description` field, add a note for reference
7. Click the `Confirm` button, then a popup window will appear to confirm
8. Wait for the timer in the `Yes` button to finish, then click it
9. Wait until your transaction is mined

# Send BOT using QT Wallet (Harder)
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```

2. Check for QTUM balance
    Your QT Wallet should launch and start syncing. Wait for the syncing to be done. In the main Overview screen, you should see if you have available QTUM.

3. Check for BOT balance
    * Click on `Smart Contract` > `Call`
    * Copy and paste the contract address
    * Copy and paste the [BodhiToken ABI](info.md#interface-abi)
    * Select `Function` > `balanceOf(70a08231)`
    * Get your [hash address](info.md#convert-qtum-address-to-hash) and paste it
    * Click the `Call Contract` button

4. Transfer BOT to another address
    * Click on `Smart Contract` > `SendTo`
    * Copy and paste the contract address
    * Copy and paste the [BodhiToken ABI](info.md#interface-abi)
    * Select `Function` > `transfer(a9059cbb)`
    * Get the [hash address](info.md#convert-qtum-address-to-hash) you want to send to and paste it
    * Type in the value as the amount to send to that address (in [Botoshi](info.md#bot-units))
    * Select the `Sender Address` at the bottom as the address that contains the BOT
    * Click the `Send To Contract` button
    * Wait for your transaction to be mined

# Send BOT using qtum-cli (Hardest)
1. Launch Qtum daemon: go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:

        $ ./qtumd

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
