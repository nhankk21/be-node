import { walletCol } from "../../database/mongodb.js";


export function isValidPrivateKey(private_key) {
    const res = walletCol.findOne({
        private_key,
    });
    if(res == null) {
        return false
    }
    return private_key
}



