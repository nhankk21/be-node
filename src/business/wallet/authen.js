import { walletCol } from "../../database/mongodb.js";



export function login(wallet, password) {
    res = walletCol.findOne({
        address : wallet,
        password: password,
    })
    if(res) {
        return true
    }
    return false
}