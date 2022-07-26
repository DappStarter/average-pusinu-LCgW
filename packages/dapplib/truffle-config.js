require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note scrub purpose harvest inhale equal genuine'; 
let testAccounts = [
"0x3072a9e12681c2054062c94bf584eb1c66e0630c690145dfda812f1337ce4bd6",
"0x2dcd1f03b759995aafb06bf375e50d415f9977980cd34c92e871b391861edd54",
"0x83574c6cd45ad7f9bd7a82ec2fdd77f97897cdebe895193d2638f607c92dbe14",
"0xac73ba43241a5e63411d59c2afb5bc772f44e324e88ab5ff76057472d82ef212",
"0xd10887478af5c42b0725766f1632bb643ff44c4cd16c9dca7cf50e882d5fca09",
"0x0cfe02b6e87b45eb713cabe877ca572d83b3ae1629f924ba59dcd2d1fe76af15",
"0xf99fd048c5c390b9342fcf85d3e6c9f94f66cea65fe528debd265d7081e613b8",
"0xb53cecb73e0cd311cc37e9153164d65df3de3fbd0da5cc6cd38894bf0b794db5",
"0x1b905aea33a4e0e8c0970c5b1e7369f6710659a6462e5215a69bc2feea236cda",
"0x632ef1fad4696fbcc2995d3b385ce567e57f6dc001e7f3410df7022884f5f76d"
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
            version: '^0.8.0'
        }
    }
};

