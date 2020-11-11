require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food novel cruise ranch coast coral light army genre'; 
let testAccounts = [
"0xd0b5cd2ac3c514a17d0ccdd2ae6df46ea317190c7477aa23e88c786f9f1be956",
"0xc32feeb3afd3a03eda1b8b8921e33e945c75200b1924387ac4d805a131fbcad3",
"0x6f01907d5d9dff5d9aa7618035733ce7136fe0c0f8e8db9785ab48ce7bc1669a",
"0xc912c51654a7492b81d36efbd4407a8dbf15c8d22fac0f471dd2479521912317",
"0x614a8b42ae94f806d6ab2606cf00eb06ddf6190c3ba467d246f50990b0d45d12",
"0x5983dad104354f594a9424153bcbd81f19a7ca586e2427ec8fe603814f4720f4",
"0xb5de83ff06d92fdbb89780aa61ef792fad7b831fb8691a82fb5594f53fcb99ea",
"0xe8874a80242064d653527b456555d3ad00586b06edbb6cf03a5fd280e2e81846",
"0xbc9b5e609174cd024485d41f89ce40b31aa16201b7d72467c8ea47cfd2200e72",
"0x3302407367c20e5cec5de9b7f4c6a41dc787d5fb087c06876d7672039a44e845"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
