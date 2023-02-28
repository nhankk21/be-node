import { getNewAddress } from "../business/address/newAddress.js"
import { onDisconnected } from "../common/onDisconnected.js";
import { collectionCol, nftCol } from "../database/mongodb.js";
import {Status} from "../common/common.js";
import { addNewNft } from "../business/collection/addNewNft.js";

export async function createNewNft(req, res){
    const nft = {
        address: getNewAddress(),
        owner: req.body.owner,
        creator: req.body.collection,
        created: Date.now(),
        updated: Date.now(),
        url: req.body.url,
        description: req.body.description,
        title: req.body.title,
    }
    res = addNewNft(nft);
    try {
        await collectionCol.findOne(nft);
    } catch{
        console.log("Fail to insert new nft!");
        res.send({
            status: Status.ERROR,
            message : "Fail to create new nft!",
        });
    }

    try {
        await nftCol.insertOne(nft);
    } catch{
        console.log("Fail to insert new nft!");
        res.send({
            status: Status.ERROR,
            message : "Fail to create new nft!",
        });
    }
    res.send({
        status: Status.OK,
        message : "Create new nft successfully!",
        data: nft,
    });
}