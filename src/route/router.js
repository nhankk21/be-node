import { nftRouter } from "./nft.js";
import { walletRouter } from "./wallet.js";


export function initRouter(app) {
    console.log("router connected");  
    app.get("/", (req, res) => {
        res.send({
            msg: "hello world!",
        });
    });
    walletRouter(app);
    nftRouter(app);

}

