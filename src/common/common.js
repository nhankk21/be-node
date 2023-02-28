export const Status = {
    OK : "OK",
    INVALID : "INVALID",
    ERROR : "ERROR",
    NOTFOUND : "NOTFOUND",
    FAILED : "FAILED",
}

export const TxnType = {
    TRANSFER : "Transfer",
    DEPOSIT : "Deposit",
    WITHDRAW : "Withdraw",
    PURCHASE : "Purchase",
    LIST : "List",
    DELIST: "Delist",
}

export const AddressType = {
    WALLET : "Wallet",
    NFT : "NFT",
    COLLECTION : "Collection",
}

export function isHexAddess(address) {
    return /^0x[0-9a-fA-F]{40}$/.test(address);
}
