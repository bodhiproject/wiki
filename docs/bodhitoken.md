## Deployed Contracts

**QTUM**

* Testnet: a619b1a87d4f17fb56e347887b971094918b016c

## Interface (ABI)
```
[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mintByOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenTotalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"supply","type":"uint256"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]
```

## Environment Prerequisites
QTUM - find latest release and download installer from [https://github.com/qtumproject/qtum/releases](https://github.com/qtumproject/qtum/releases)

## Convert Qtum Address to Hash
1. With QT Wallet open, select Help > Debug window
2. Select the Console tab
3. Type the command: `gethexaddress (yourQtumAddress)`
4. Output is the hash address

## Transfer Bodhi Tokens
1. Launch QT Wallet - Go to your `qtum-x.xx.x/bin` folder that you installed it in and run in Terminal:
    ```
    $ ./qtum-qt
    ```

2. Check for QTUM balance
    Your QT Wallet should launch and start syncing. Wait for the syncing to be done. In the main Overview screen, you should see if you have available QTUM.

3. Check for BOT balance
    * Click on `Smart Contract` > `Call`
    * Copy and paste the contract address
    * Copy and paste the BodhiToken ABI
    * Select `Function` > `balanceOf(70a08231)`
    * Get your hash address and paste it
    * Click the `Call Contract` button

4. Transfer BOT to another address
    * Click on `Smart Contract` > `SendTo`
    * Copy and paste the contract address
    * Copy and paste the BodhiToken ABI
    * Select `Function` > `transfer(a9059cbb)`
    * Get your hash of the address you want to send to and paste it
    * Type in the value as the amount to send to that address (in lowest denomination of BOT, Botoshi)
    * Select the `Sender Address` at the bottom as the address that contains the BOT
    * Click the `Send To Contract` button
    * Wait for your transaction to be mined
