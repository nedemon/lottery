const path = require("path");
const fs = require("fs");
const solc = require("solc");
const util = require('util')

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

let compilerInput = {
    language: 'Solidity',
    sources:
    {
        'Lottery.sol': 
        {
            content: source
        }
    },
    settings:
    {
        optimizer:
        {
            enabled: true
        },
        outputSelection:
        {
            '*':{
                '*':['*']
            }
        }
    }
};
let compiledContract = JSON.parse(solc.compile(JSON.stringify(compilerInput)));

//console.log(JSON.stringify(compiledContract, null, 4))

//console.log(util.inspect(compiledContract['contracts']['Lottery.sol']['Lottery']['abi'], {depth: null}))
//console.log(compiledContract['contracts']['Lottery.sol']['Lottery']['evm']['bytecode'])
module.exports = JSON.parse(JSON.stringify(compiledContract['contracts']['Lottery.sol']['Lottery'], null, 4));
