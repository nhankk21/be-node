import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://admin:admin@ecommerceapp.osyqtjs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("ecommerceapp");
export const addressCol = database.collection("address");
export const walletCol = database.collection("wallet");
export const transactionCol = database.collection("transaction");
export const nftCol = database.collection("nft");
export const collectionCol = database.collection("collection");

export async function initMongodb() {
        client.connect();
        console.log("database connected");   
}

export function dbDisconnected(){
    client.close();
    console.log("db disconnected");
}
