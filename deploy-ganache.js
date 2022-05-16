const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const deploy = async () => {
  let bytecode = evm.bytecode;
  let interface = abi;
  //console.log(bytecode.object)
  //console.log(JSON.stringify(interface, null, 4))

  
  const provider = new HDWalletProvider(
    'deny bless slot pretty credit mom fine average hand stairs census carbon',
    'http://127.0.0.1:7545'
  );
  const web3 = new Web3(provider);
  this.accounts = await web3.eth.getAccounts();
  //console.log(this.accounts)
  console.log('Attempting to deploy from account', this.accounts[0]);

  this.contract = await new web3.eth.Contract(JSON.parse(JSON.stringify(interface)))
    .deploy({data:'0x'+ bytecode.object, arguments: []})
    .send({ gas: '1000000', from: this.accounts[0] });

  return this;
};

deploy().then(useContract);

function useContract(result) {
    // Use result.accounts and result.contract here to do what you like.
    console.log('Contract deployed to: ' + result.contract.options.address);
    console.log('Owner address is:     ' + result.accounts[0]);
}
