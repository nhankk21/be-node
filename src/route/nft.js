import { createNewNft } from "../handler/nft.js";
import { verifyToken } from "../middlewares/verifytoken.js";


export function nftRouter(app) {

    //public api
    // app.post("/nft/info", (req, res) => {
    //     getNftInfo(req, res);
    // });

    //private api
    app.post("/nft/create", verifyToken, (req, res) => {
        createNewNft(req, res);
    });
    
}