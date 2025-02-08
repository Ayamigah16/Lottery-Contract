const path =  require('path');
const fs = require('fs');
const solc = require('solc');

// get contract source
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf-8');


// export compile info
module.exports = solc.compile(source, 1).contracts[':Lottery']

// display compile info
// console.log(solc.compile(source,1));