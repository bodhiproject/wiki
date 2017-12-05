# Interface (ABI)
<textarea id="topic_event_abi" class="abi" readonly rows="2">
[{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"},{"name":"_sender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"voteFromOracle","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBotValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_oracleIndex","type":"uint8"}],"name":"getOracle","outputs":[{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resultSet","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFinalResult","outputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"resultNames","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVoteBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"oracles","outputs":[{"name":"didSetResult","type":"bool"},{"name":"oracleAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finalizeResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_resultIndex","type":"uint8"},{"name":"_botAmount","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"name":"centralizedOracleSetResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalQtumValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_consensusThreshold","type":"uint256"}],"name":"invalidateOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calculateQtumContributorWinnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_better","type":"address"},{"name":"_resultIndex","type":"uint8"}],"name":"bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"},{"name":"_currentConsensusThreshold","type":"uint256"}],"name":"votingOracleSetResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEventName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invalidResultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawWinnings","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"calculateBotContributorWinnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_centralizedOracle","type":"address"},{"name":"_name","type":"bytes32[10]"},{"name":"_resultNames","type":"bytes32[10]"},{"name":"_bettingEndBlock","type":"uint256"},{"name":"_resultSettingEndBlock","type":"uint256"},{"name":"_addressManager","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_resultIndex","type":"uint8"}],"name":"CentralizedOracleResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_finalResultIndex","type":"uint8"}],"name":"FinalResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_winner","type":"address"},{"indexed":false,"name":"_qtumTokenWon","type":"uint256"},{"indexed":false,"name":"_botTokenWon","type":"uint256"}],"name":"WinningsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#topic_event_abi">Copy ABI</button>
<span class="copied">Copied!</span>

# Function Signatures

    9fa92fea: bet(address,uint8)
    fd268eee: calculateBotContributorWinnings()
    91216876: calculateQtumContributorWinnings()
    704cbff0: centralizedOracleSetResult(address,uint8,uint256,uint256)
    61cac418: finalizeResult()
    871169b9: getBetBalances()
    b81e43fc: getEventName()
    3c6e5310: getFinalResult()
    1569aaf9: getOracle(uint8)
    4fb9f9a7: getTotalVoteBalance()
    95d3382a: getVoteBalances()
    c8ef9028: invalidResultIndex()
    86b17bf3: invalidateOracle(uint256)
    ca381d2e: numOfResults()
    5b69a7d8: oracles(uint256)
    8da5cb5b: owner()
    3cfdbb44: resultNames(uint256)
    1e977e78: resultSet()
    200d2ed2: status()
    07e1df56: totalBotValue()
    8030b87e: totalQtumValue()
    f2fde38b: transferOwnership(address)
    006a8a32: voteFromOracle(uint8,address,uint256)
    a2f82c0e: votingOracleSetResult(uint8,uint256)
    cc42e83a: withdrawWinnings()

# Event Hashes

    event FinalResultSet(uint8 _finalResultIndex)
    // TODO
    
    event WinningsWithdrawn(address indexed _winner, uint256 _qtumTokenWon, uint256 _botTokenWon)
    // TODO
