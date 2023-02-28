import { collectionCol } from "../../database/mongodb";


export function isValidCollection(address){
    res = collectionCol.findOne({
        address : address
    })
    if (res == null ) {
        return false
    }
    return true
}