import crypto from 'crypto';
import { addressCol } from '../../database/mongodb.js';



export function getNewAddress() {
    const randomBytes = crypto.randomBytes(20);
    const hexAddress = "0x" + randomBytes.toString("hex");
    if (isNewAddressValid(hexAddress)){
        return hexAddress;
    } 
    return getNewAddress();
}


export function isNewAddressValid(address) {
    // find address in database
    if (addressCol.findOne({
        address: address,
    })){
        return true
    }
    return false;
}