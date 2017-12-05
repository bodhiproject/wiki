# Interface (ABI)
<textarea id="centralized_oracle_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[],"name":"bettingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"},{"name":"_botAmount","type":"uint256"}],"name":"setResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"invalidateOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_eventResultIndex","type":"uint8"}],"name":"getVotedBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_eventResultIndex","type":"uint8"}],"name":"getEventResultName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getResultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEventName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invalidResultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"}],"name":"bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"resultSettingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"consensusThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_oracle","type":"address"},{"name":"_eventAddress","type":"address"},{"name":"_eventName","type":"bytes32[10]"},{"name":"_eventResultNames","type":"bytes32[10]"},{"name":"_numOfResults","type":"uint8"},{"name":"_bettingEndBlock","type":"uint256"},{"name":"_resultSettingEndBlock","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":true,"name":"_participant","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"},{"indexed":false,"name":"_votedAmount","type":"uint256"}],"name":"OracleResultVoted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"}],"name":"OracleResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"}],"name":"OracleInvalidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#centralized_oracle_abi">Copy ABI</button>
<span class="copied">Copied!</span>

# Event Hashes

    event OracleResultVoted(address indexed _oracleAddress, address indexed _participant, uint8 _resultIndex, uint256 _votedAmount);
    0f6520c85c2e282b6c54e14e5b424ca7eafc89615f05f2d35f3c1f9110e9df03

# Betting on a TopicEvent Result
1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab
3. Click on `SendTo` sub tab
4. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
5. Set the `Function` to `bet(d0821b0e)`
6. Set the Result Index you would like to bet in `uint8 _resultIndex` field

    ![](../img/bet_result1.png)

7. Set the amount of QTUM to bet in the `Amount` field
8. Set the `Sender Address` as the address you want to bet from

    ![](../img/bet_result2.png)

9. Click `Send To Contract` button
10. You should see your new transaction posted
    
    ![](../img/bet_result3.png)

11. In the `Transactions` tab, you can also see the transaction

    ![](../img/bet_result4.png)
    
12. Wait for the transaction to get mined

# Reading bet transaction receipt
1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. In the top menu bar, open `Help` > `Debug window`
3. Run the command `gettransactionreceipt (transactionId)`:

        $ gettransactionreceipt e08eb07a4bbd7ddb0d95dbb816bb675d1ba92b253caa348e858a32af42a5e74d
        [
          {
            "blockHash": "cc1bc42fb696e53ef3a591b3c387600fc3d82b6835a79e506dddab82f10e68e3",
            "blockNumber": 44521,
            "transactionHash": "e08eb07a4bbd7ddb0d95dbb816bb675d1ba92b253caa348e858a32af42a5e74d",
            "transactionIndex": 2,
            "from": "17e7888aa7412a735f336d2f6d784caefabb6fa3",
            "to": "a9716b4c11b5c3e9c76636967a68ccc4c1329622",
            "cumulativeGasUsed": 137492,
            "gasUsed": 137492,
            "contractAddress": "a9716b4c11b5c3e9c76636967a68ccc4c1329622",
            "log": [
              {
                "address": "a9716b4c11b5c3e9c76636967a68ccc4c1329622",
                "topics": [
                  "0f6520c85c2e282b6c54e14e5b424ca7eafc89615f05f2d35f3c1f9110e9df03", 
                  "000000000000000000000000a9716b4c11b5c3e9c76636967a68ccc4c1329622", 
                  "00000000000000000000000017e7888aa7412a735f336d2f6d784caefabb6fa3"
                ],
                "data": "0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000003b9aca00"
              }
            ]
          }
        ]
        # contractAddress: a9716b4c11b5c3e9c76636967a68ccc4c1329622 is CentralizedOracle contract
        # log.address: a9716b4c11b5c3e9c76636967a68ccc4c1329622 is CentralizedOracle contract
        # log.topics[1]: 000000000000000000000000a9716b4c11b5c3e9c76636967a68ccc4c1329622 is address indexed _oracleAddress
        # log.topics[2]: 00000000000000000000000017e7888aa7412a735f336d2f6d784caefabb6fa3 is address indexed _participant
        # log.data: uint8 _resultIndex, uint256 _votedAmount
