# Interface (ABI)
<textarea id="centralized_oracle_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[],"name":"bettingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"invalidateOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_eventResultIndex","type":"uint8"}],"name":"getEventResultName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"}],"name":"setResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVotes","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalBets","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEventName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invalidResultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"}],"name":"bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"resultSettingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getResult","outputs":[{"name":"","type":"uint8"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"consensusThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_oracle","type":"address"},{"name":"_eventAddress","type":"address"},{"name":"_eventName","type":"bytes32[10]"},{"name":"_eventResultNames","type":"bytes32[10]"},{"name":"_numOfResults","type":"uint8"},{"name":"_bettingEndBlock","type":"uint256"},{"name":"_resultSettingEndBlock","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":true,"name":"_participant","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"},{"indexed":false,"name":"_votedAmount","type":"uint256"}],"name":"OracleResultVoted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"}],"name":"OracleResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oracleAddress","type":"address"}],"name":"OracleInvalidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#centralized_oracle_abi">Copy ABI</button>
<span class="copied">Copied!</span>

# Function Signatures

    d0821b0e: bet(uint8)
    12ca9ed5: bettingEndBlock()
    f9b0b5b9: consensusThreshold()
    fad56779: eventAddress()
    bef4876b: finished()
    871169b9: getBetBalances()
    b81e43fc: getEventName()
    4cb15529: getEventResultName(uint8)
    de292789: getResult()
    a3cb679d: getTotalBets()
    9a0e7d66: getTotalVotes()
    95d3382a: getVoteBalances()
    c8ef9028: invalidResultIndex()
    2f64452e: invalidateOracle()
    ca381d2e: numOfResults()
    7dc0d1d0: oracle()
    8da5cb5b: owner()
    d16e637b: resultSettingEndBlock()
    80ce60d1: setResult(uint8)
    f2fde38b: transferOwnership(address)

# Event Hashes

    event OracleResultVoted(address indexed _oracleAddress, address indexed _participant, uint8 _resultIndex, uint256 _votedAmount)
    0f6520c85c2e282b6c54e14e5b424ca7eafc89615f05f2d35f3c1f9110e9df03

    event OracleResultSet(address indexed _oracleAddress, uint8 _resultIndex)
    b42c9ac580dc82ad43bf9a1b2262e16b53f647e722089b93ebae1479032fc221

    event OracleInvalidated(address indexed _oracleAddress)
    // TODO

# bet()
Places a bet on a result given the index. The QTUM is routed to the TopicEvent contract for storage.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `SendTo` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `bet(d0821b0e)`

    ![](../img/bet_result1.png)

5. Set the Result Index you would like to bet in `uint8 _resultIndex` field

    ![](../img/bet_result2.png)

6. Set the amount of QTUM to bet in the `Amount` field

    ![](../img/bet_result3.png)

7. Set the `Sender Address` as the address you want to bet from

    ![](../img/bet_result4.png)

8. Click `Send To Contract` button
9. You should see your new transaction posted. Save the transaction id if you want to verify the transaction succeeded.

    ![](../img/bet_result5.png)
    
11. Wait for the transaction to get mined

# setResult()
The CentralizedOracle can set the result by first approving 100 BOT (the consensus threshold) to the TopicEvent address. Then they can call this method to set the result.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. [approve()](../bodhi_token/qt_wallet_desktop.md#approve-bot) `10000000000` Botoshi (100 BOT) which is the current consensus threshold. The `_spender` should be the `TopicEvent` address.
3. Click on `Smart Contract` tab, then click on `SendTo` sub tab
4. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
5. Set the `Function` to `setResult(80ce60d1)`
6. Set the Result Index you would like to set the result in `uint8 _resultIndex` field
7. Set the amount `10000000000` Botoshi in the `uint256 _botAmount` field
8. Set the `Gas Limit` to `3000000` (3 million) to make sure the transaction goes through
9. Set the `Sender Address` as the CentralizedOracle address
10. Click `Send To Contract` button
11. You should see your new transaction posted. Save the transaction id if you want to verify the transaction succeeded.
12. Wait for your transaction to be mined

# invalidateOracle()
If the CentralizedOracle does not set the result by the result setting end block, anyone can call this method to invalidate the CentralizedOracle. This will create a new DecentralizedOracle and start a new BOT voting round. All results will be available to vote on.

# getEventName()
Returns the event name.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `Call` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `getEventName(b81e43fc)`
5. Click `Call Contract` button
6. The `string` is the event name

# getEventResultName()
Returns the event name given the Event result index.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `Call` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `getEventResultName(4cb15529)`
5. Click `Call Contract` button
6. Set the `uint8 _eventResultIndex`
7. The `string` is the Event result name

# oracle()
Returns the address of the CentralizedOracle.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `Call` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `oracle(7dc0d1d0)`
5. Click `Call Contract` button
6. The `address` is the CentralizedOracle in hex

# bettingEndBlock()
Returns the block when the betting period will end.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `Call` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `bettingEndBlock(12ca9ed5)`
5. Click `Call Contract` button
6. The `uint256` is the betting end block

# resultSettingEndBlock()
Returns the block when the CentralizedOracle will no longer be able to set the result.

1. [Launch QT Wallet](../qtum/qt_wallet.md#launch-qt-wallet)
2. Click on `Smart Contract` tab, then click on `Call` sub tab
3. Set the `Contract Address` and [Interface (ABI)](#interface-abi)
4. Set the `Function` to `resultSettingEndBlock(d16e637b)`
5. Click `Call Contract` button
6. The `uint256` is the result setting end block
