import { createNewCollection } from "../handler/collection";
import { verifyToken } from "../middlewares/verifytoken";


export function collectionRouter(app) {

    //public api
    app.post("/collection/info", (req, res) => {
        getCollectionInfo(req, res);
    });

    //private api
    app.post("/nft/create", verifyToken, (req, res) => {
        createNewCollection(req, res);
    });
    
}