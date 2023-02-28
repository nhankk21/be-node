import { walletCol } from "../../database/mongodb.js";



export function login(wallet, password) {
    const res = walletCol.findOne({
        address : wallet,
        password: password,
    });
    if(res == null) {
        return false
    }
    return true
}