import { compileFile } from 'cashc';
import { Contract, MockNetworkProvider } from 'cashscript';
import {
    generatePrivateKey,
    instantiateSecp256k1,
    instantiateRipemd160,
    instantiateSha256,
    decodePrivateKeyWif,
    binToHex,
    encodeCashAddress,
} from '@bitauth/libauth';

const secp256k1 = await instantiateSecp256k1();

const generateWallet = () => {
    const privateKey = generatePrivateKey();
    const pubKeyBin = secp256k1.derivePublicKeyCompressed(privateKey);
    const pubKeyHex = binToHex(pubKeyBin);
    return { privateKey, pubKeyHex };
};

const tester = {
    setup: () => {
        const gameArtifact = compileFile(new URL('game.cash', import.meta.url));
        const xWallet = generateWallet();
        const oWallet = generateWallet();
        const gameContract = new Contract(gameArtifact, [xWallet.pubKeyHex, oWallet.pubKeyHex]);
        const mockProvider = new MockNetworkProvider();
        return { gameContract, xWallet, oWallet, mockProvider };
    },
    tests: [
        () => {

        }
    ],
};

tester.forEach(test => {
    var props = setup();
    test(props);
});