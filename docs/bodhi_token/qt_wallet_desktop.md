# Downloads
* QT wallet/qtum-cli - find latest release and download installer:
    * [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases)

# Convert Qtum Address to Hash
1. With QT Wallet open, select Help > Debug window

	![](../img/qt_wallet_convert_1.png)

2. Select the Console tab
3. Type the command: `gethexaddress (yourQtumAddress)`
	
	![](../img/qt_wallet_convert_2.png)

4. Output is the hash address

	![](../img/qt_wallet_convert_3.png)

# Watch BOT
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```
2. In the `Overview` tab, click the `Add Token` button
3. Copy/paste the token address in `Contract Address`
4. Select the `Token Address` which you would like to monitor BOT activity on
5. Click on the `Confirm` button
6. You should now see `BOT` being monitored in the `Overview` and `QRC Token` tabs

# Send BOT in QRC Token tab (Easy)
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

# Send BOT in Smart Contract tab (Harder)
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

# Receive BOT
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```
2. Click on `File` > `Receiving addresses...`
3. Select the address you would like the BOT sent to then click `Copy`
4. Give that address to the person sending the BOT to you
