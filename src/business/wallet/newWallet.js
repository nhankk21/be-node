import BIP39 from 'bip39';
import HDKey from 'hdkey';


export function getNewPrivateKey() {
    const mnemonic = BIP39.generateMnemonic(128);   
    return mnemonic;
}