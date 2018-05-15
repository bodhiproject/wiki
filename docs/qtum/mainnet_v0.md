# BodhiToken

    11/1/2017
    Address: 6b8bf98ff497c064e8f0bde13e0c4f5ed5bf8ce7
    Txid: ab35b9f424ef46b601ecf6909b36c9d524bb9321b24f18667bd9b38bd481bfb3
    Owner: QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF

**ABI**
<textarea id="bodhi_token_abi" class="abi" readonly rows="2">
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" } ], "name": "mintByOwner", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenTotalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "supply", "type": "uint256" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ]
</textarea>
<button class="btn" data-clipboard-target="#bodhi_token_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

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



# AddressManager

    4/5/2018
    Address: 65a6e976f633ba47eec1c7f2db30ea8ddcec4c48
    Txid: 202d294972cf762005cc092805269f6cb0a830841194283ae6509337fa5abc4a
    Owner: QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF

**ABI**
<textarea id="address_manager_abi" class="abi" readonly rows="2">
[{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setOracleFactoryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setEventFactoryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentEventFactoryIndex","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"oracleFactoryAddressToVersion","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastEventFactoryIndex","outputs":[{"name":"lastEventFactoryIndex","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"thresholdPercentIncrease","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventEscrowAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_creator","type":"address"},{"name":"_escrowAmount","type":"uint256"}],"name":"withdrawEscrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bodhiTokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"botDecimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint16"}],"name":"oracleFactoryVersionToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_creator","type":"address"}],"name":"transferEscrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint16"}],"name":"eventFactoryVersionToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newPercentage","type":"uint256"}],"name":"setConsensusThresholdPercentIncrease","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastOracleFactoryIndex","outputs":[{"name":"lastOracleFactoryIndex","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"eventFactoryAddressToVersion","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentOracleFactoryIndex","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"arbitrationLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newThreshold","type":"uint256"}],"name":"setStartingOracleThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startingOracleThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newEscrowAmount","type":"uint256"}],"name":"setEventEscrowAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"addWhitelistContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"setBodhiTokenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newIndex","type":"uint16"}],"name":"setCurrentEventFactoryIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newIndex","type":"uint16"}],"name":"setCurrentOracleFactoryIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newLength","type":"uint256"}],"name":"setArbitrationLength","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_newAddress","type":"address"}],"name":"BodhiTokenAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_index","type":"uint16"},{"indexed":true,"name":"_contractAddress","type":"address"}],"name":"EventFactoryAddressAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_index","type":"uint16"},{"indexed":true,"name":"_contractAddress","type":"address"}],"name":"OracleFactoryAddressAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_depositer","type":"address"},{"indexed":false,"name":"escrowAmount","type":"uint256"}],"name":"EscrowDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_eventAddress","type":"address"},{"indexed":true,"name":"_depositer","type":"address"},{"indexed":false,"name":"escrowAmount","type":"uint256"}],"name":"EscrowWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contractAddress","type":"address"}],"name":"ContractWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#address_manager_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    d56d5a7d: addWhitelistContract(address)
    8db8203d: arbitrationLength()
    5145e0b6: bodhiTokenAddress()
    52cb21f9: botDecimals()
    105845ef: currentEventFactoryIndex()
    73787b68: currentOracleFactoryIndex()
    3336d5e2: eventEscrowAmount()
    6532cd99: eventFactoryAddressToVersion(address)
    5db82dca: eventFactoryVersionToAddress(uint16)
    2c04da69: getLastEventFactoryIndex()
    61437116: getLastOracleFactoryIndex()
    25d5bcf8: oracleFactoryAddressToVersion(address)
    548897e5: oracleFactoryVersionToAddress(uint16)
    8da5cb5b: owner()
    e893f01b: setArbitrationLength(uint256)
    dfff739e: setBodhiTokenAddress(address)
    60a0d19d: setConsensusThresholdPercentIncrease(uint256)
    e04080ec: setCurrentEventFactoryIndex(uint16)
    e5f6673b: setCurrentOracleFactoryIndex(uint16)
    ba00ac23: setEventEscrowAmount(uint256)
    06acf31b: setEventFactoryAddress(address)
    0634865a: setOracleFactoryAddress(address)
    9125c208: setStartingOracleThreshold(uint256)
    a6a5f158: startingOracleThreshold()
    2dfa05a7: thresholdPercentIncrease()
    57cd0e27: transferEscrow(address)
    f2fde38b: transferOwnership(address)
    3946b978: withdrawEscrow(address,uint256)



# EventFactory

    4/5/2018
    Address: b4e5b0d964866c61d454ae0a9895d5f92612d009
    Txid: ecbf5aac92fde592149f17c632dcd9aa41bee6896ea4953f1f00b7f6c1f168e9
    Owner: QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF

**ABI**
<textarea id="event_factory_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"topics","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_name","type":"bytes32[10]"},{"name":"_resultNames","type":"bytes32[10]"},{"name":"_bettingStartTime","type":"uint256"},{"name":"_bettingEndTime","type":"uint256"},{"name":"_resultSettingStartTime","type":"uint256"},{"name":"_resultSettingEndTime","type":"uint256"}],"name":"createTopic","outputs":[{"name":"topicEvent","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_addressManager","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_topicAddress","type":"address"},{"indexed":true,"name":"_creatorAddress","type":"address"},{"indexed":false,"name":"_name","type":"bytes32[10]"},{"indexed":false,"name":"_resultNames","type":"bytes32[11]"},{"indexed":false,"name":"_numOfResults","type":"uint8"},{"indexed":false,"name":"_escrowAmount","type":"uint256"}],"name":"TopicCreated","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#event_factory_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    b7b6d822: createTopic(address,bytes32[10],bytes32[10],uint256,uint256,uint256,uint256)
    0f2fbeec: topics(bytes32)
    54fd4d50: version()



# TopicEvent

    4/5/2018

**ABI**
<textarea id="topic_event_abi" class="abi" readonly rows="2">
[{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"},{"name":"_sender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"voteFromOracle","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBotValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calculateWinnings","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"didWithdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_better","type":"address"},{"name":"_resultIndex","type":"uint8"}],"name":"betFromOracle","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getFinalResult","outputs":[{"name":"","type":"uint8"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"decentralizedOracleFinalizeResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"escrowAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"eventResults","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"oracles","outputs":[{"name":"oracleAddress","type":"address"},{"name":"didSetResult","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawEscrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_resultIndex","type":"uint8"},{"name":"_consensusThreshold","type":"uint256"}],"name":"centralizedOracleSetResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalQtumValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"QTUM_PERCENTAGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVotes","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalBets","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"escrowWithdrawn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVALID_RESULT_INDEX","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawWinnings","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"},{"name":"_currentConsensusThreshold","type":"uint256"}],"name":"decentralizedOracleSetResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"eventName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_version","type":"uint16"},{"name":"_owner","type":"address"},{"name":"_centralizedOracle","type":"address"},{"name":"_name","type":"bytes32[10]"},{"name":"_resultNames","type":"bytes32[11]"},{"name":"_numOfResults","type":"uint8"},{"name":"_bettingStartTime","type":"uint256"},{"name":"_bettingEndTime","type":"uint256"},{"name":"_resultSettingStartTime","type":"uint256"},{"name":"_resultSettingEndTime","type":"uint256"},{"name":"_addressManager","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_eventAddress","type":"address"},{"indexed":false,"name":"_finalResultIndex","type":"uint8"}],"name":"FinalResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_winner","type":"address"},{"indexed":false,"name":"_qtumTokenWon","type":"uint256"},{"indexed":false,"name":"_botTokenWon","type":"uint256"}],"name":"WinningsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#topic_event_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    bb235d67: INVALID_RESULT_INDEX()
    8aa14e43: QTUM_PERCENTAGE()
    3381fc18: betFromOracle(address,uint8)
    11f2a04d: calculateWinnings()
    74513913: centralizedOracleSetResult(address,uint8,uint256)
    4529fd93: decentralizedOracleFinalizeResult()
    dee84d7e: decentralizedOracleSetResult(uint8,uint256)
    1707490f: didWithdraw(address)
    47a7846f: escrowAmount()
    b0856411: escrowWithdrawn()
    fe499d6e: eventName(uint256)
    5979c6c5: eventResults(uint256)
    871169b9: getBetBalances()
    3c6e5310: getFinalResult()
    a3cb679d: getTotalBets()
    9a0e7d66: getTotalVotes()
    95d3382a: getVoteBalances()
    ca381d2e: numOfResults()
    5b69a7d8: oracles(uint256)
    8da5cb5b: owner()
    0d4e8aed: resultIndex()
    200d2ed2: status()
    07e1df56: totalBotValue()
    8030b87e: totalQtumValue()
    f2fde38b: transferOwnership(address)
    54fd4d50: version()
    006a8a32: voteFromOracle(uint8,address,uint256)
    5ffe3a3d: withdrawEscrow()
    cc42e83a: withdrawWinnings()



# OracleFactory

    4/5/2018
    Address: 184fc5c42595df6c53478687f30699dc38f57f2e
    Txid: f1efae9edc0a35a5f88d3e60e1132c9d9a7deb492733487b258710a3e1296b19
    Owner: QgRUhP8sLMCNKrzwtW4xU5DF8CCTeiA3sF

**ABI**
<textarea id="oracle_factory_abi" class="abi" readonly rows="2">
[{"constant":false,"inputs":[{"name":"_eventAddress","type":"address"},{"name":"_numOfResults","type":"uint8"},{"name":"_oracle","type":"address"},{"name":"_bettingStartTime","type":"uint256"},{"name":"_bettingEndTime","type":"uint256"},{"name":"_resultSettingStartTime","type":"uint256"},{"name":"_resultSettingEndTime","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"name":"createCentralizedOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_eventAddress","type":"address"},{"name":"_numOfResults","type":"uint8"},{"name":"_lastResultIndex","type":"uint8"},{"name":"_arbitrationEndTime","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"name":"createDecentralizedOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"oracles","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_addressManager","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_contractAddress","type":"address"},{"indexed":true,"name":"_eventAddress","type":"address"},{"indexed":false,"name":"_numOfResults","type":"uint8"},{"indexed":false,"name":"_oracle","type":"address"},{"indexed":false,"name":"_bettingStartTime","type":"uint256"},{"indexed":false,"name":"_bettingEndTime","type":"uint256"},{"indexed":false,"name":"_resultSettingStartTime","type":"uint256"},{"indexed":false,"name":"_resultSettingEndTime","type":"uint256"},{"indexed":false,"name":"_consensusThreshold","type":"uint256"}],"name":"CentralizedOracleCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_contractAddress","type":"address"},{"indexed":true,"name":"_eventAddress","type":"address"},{"indexed":false,"name":"_numOfResults","type":"uint8"},{"indexed":false,"name":"_lastResultIndex","type":"uint8"},{"indexed":false,"name":"_arbitrationEndTime","type":"uint256"},{"indexed":false,"name":"_consensusThreshold","type":"uint256"}],"name":"DecentralizedOracleCreated","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#oracle_factory_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    3bb2f963: createCentralizedOracle(address,uint8,address,uint256,uint256,uint256,uint256,uint256)
    7f200f20: createDecentralizedOracle(address,uint8,uint8,uint256,uint256)
    a81a2677: oracles(bytes32)
    54fd4d50: version()



# CentralizedOracle

    4/5/2018

**ABI**
<textarea id="centralized_oracle_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[],"name":"resultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resultSettingEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bettingEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"}],"name":"setResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVotes","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalBets","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVALID_RESULT_INDEX","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bettingStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_resultIndex","type":"uint8"}],"name":"bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"consensusThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resultSettingStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_version","type":"uint16"},{"name":"_owner","type":"address"},{"name":"_eventAddress","type":"address"},{"name":"_numOfResults","type":"uint8"},{"name":"_oracle","type":"address"},{"name":"_bettingStartTime","type":"uint256"},{"name":"_bettingEndTime","type":"uint256"},{"name":"_resultSettingStartTime","type":"uint256"},{"name":"_resultSettingEndTime","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":true,"name":"_participant","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"},{"indexed":false,"name":"_votedAmount","type":"uint256"},{"indexed":false,"name":"_token","type":"bytes32"}],"name":"OracleResultVoted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"}],"name":"OracleResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#centralized_oracle_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    bb235d67: INVALID_RESULT_INDEX()
    d0821b0e: bet(uint8)
    67075032: bettingEndTime()
    d056af1b: bettingStartTime()
    f9b0b5b9: consensusThreshold()
    fad56779: eventAddress()
    bef4876b: finished()
    871169b9: getBetBalances()
    a3cb679d: getTotalBets()
    9a0e7d66: getTotalVotes()
    95d3382a: getVoteBalances()
    ca381d2e: numOfResults()
    7dc0d1d0: oracle()
    8da5cb5b: owner()
    0d4e8aed: resultIndex()
    13ffcae6: resultSettingEndTime()
    fe3bead1: resultSettingStartTime()
    80ce60d1: setResult(uint8)
    f2fde38b: transferOwnership(address)
    54fd4d50: version()



# DecentralizedOracle

    4/5/2018

**ABI**
<textarea id="decentralized_oracle_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[],"name":"resultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastResultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"arbitrationEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finalizeResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVotes","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_eventResultIndex","type":"uint8"},{"name":"_botAmount","type":"uint256"}],"name":"voteResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalBets","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVALID_RESULT_INDEX","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"consensusThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eventAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_version","type":"uint16"},{"name":"_owner","type":"address"},{"name":"_eventAddress","type":"address"},{"name":"_numOfResults","type":"uint8"},{"name":"_lastResultIndex","type":"uint8"},{"name":"_arbitrationEndTime","type":"uint256"},{"name":"_consensusThreshold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":true,"name":"_participant","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"},{"indexed":false,"name":"_votedAmount","type":"uint256"},{"indexed":false,"name":"_token","type":"bytes32"}],"name":"OracleResultVoted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_version","type":"uint16"},{"indexed":true,"name":"_oracleAddress","type":"address"},{"indexed":false,"name":"_resultIndex","type":"uint8"}],"name":"OracleResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
</textarea>
<button class="btn" data-clipboard-target="#decentralized_oracle_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    bb235d67: INVALID_RESULT_INDEX()
    5df2578f: arbitrationEndTime()
    f9b0b5b9: consensusThreshold()
    fad56779: eventAddress()
    61cac418: finalizeResult()
    bef4876b: finished()
    871169b9: getBetBalances()
    a3cb679d: getTotalBets()
    9a0e7d66: getTotalVotes()
    95d3382a: getVoteBalances()
    54750783: lastResultIndex()
    ca381d2e: numOfResults()
    8da5cb5b: owner()
    0d4e8aed: resultIndex()
    f2fde38b: transferOwnership(address)
    54fd4d50: version()
    a34ce8b9: voteResult(uint8,uint256)



# BaseContract

    4/5/2018

**ABI**
<textarea id="base_contract_abi" class="abi" readonly rows="2">
[{"constant":true,"inputs":[],"name":"resultIndex","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBetBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoteBalances","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalVotes","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalBets","outputs":[{"name":"","type":"uint256[11]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVALID_RESULT_INDEX","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfResults","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]
</textarea>
<button class="btn" data-clipboard-target="#base_contract_abi">Copy ABI</button>
<span class="copied">Copied!</span>

**Function Signatures**

    bb235d67: INVALID_RESULT_INDEX()
    871169b9: getBetBalances()
    a3cb679d: getTotalBets()
    9a0e7d66: getTotalVotes()
    95d3382a: getVoteBalances()
    ca381d2e: numOfResults()
    0d4e8aed: resultIndex()
    54fd4d50: version()
