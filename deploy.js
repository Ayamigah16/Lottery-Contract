require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    process.env.ACCOUNT_MNEMONICS,
    process.env.INFURA_SEPOLIA_LINK
);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);

        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode})
            .send({ from: accounts[0], gas: '1000000' });

        console.log('Contract deployed to', result.options.address);
    } catch (error) {
        console.error('\nAn error occurred during deployment:', error);
    }
};

deploy();