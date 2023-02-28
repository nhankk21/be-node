import { collectionCol } from "../database/mongodb.js";


export async function createNewCollection(req, res) {
    const collection = {
        address: getNewAddress(),
        creator: req.body.creator,
        created: Date.now(),
        updated: Date.now(),
        name: req.body.name,
        description: req.body.description,
        title: req.body.title,
        rate: req.body.rate,
        txn_history : {}
    }
    try {
        await collectionCol.insertOne(collection);
    } catch{
        console.log("Fail to insert new collection!");
        res.send({
            status: Status.ERROR,
            message : "Fail to create new collection!",
        });
    }
    res.send({
        status: Status.OK,
        message : "Create new collection successfully!",
        data: collection,
    });
}