const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const test = async () => {
  let bytecode = evm.bytecode;
  let interface = abi;
  //console.log(bytecode.object)
  //console.log(JSON.stringify(interface, null, 4))
  
  const provider = new HDWalletProvider(
    'deny bless slot pretty credit mom fine average hand stairs census carbon',
    'http://127.0.0.1:7545'
  );
  const web3 = new Web3(provider);

  const contract = await new web3.eth.Contract(JSON.parse(JSON.stringify(interface)), '0x8dFD29BC067ea7aDCeE8eA4aDe0892f0e164B634')
  web3.eth.getBalance('0x8dFD29BC067ea7aDCeE8eA4aDe0892f0e164B634')
    .then(balance => console.log(balance));
  contract.methods.getPlayers().call()
  .then(result => console.log(result));

  contract.methods.logWinner().call()
    .then(result => console.log(result));
  contract.methods.logWinner().call()
  .then(result => console.log(result));
  contract.methods.logWinner().call()
    .then(result => console.log(result));
  contract.methods.logWinner().call()
  .then(result => console.log(result));
  contract.methods.logWinner().call()
    .then(result => console.log(result));
  contract.methods.logWinner().call()
  .then(result => console.log(result));
  contract.methods.logWinner().call()
    .then(result => console.log(result));
  contract.methods.logWinner().call()
  .then(result => console.log(result));
    
}

test()