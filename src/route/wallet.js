import { getNewWallet, preLogin } from "../handler/wallet.js";
import { verifyToken } from "../middlewares/verifytoken.js";


export function walletRouter(app) {

    // public api
    app.post("/wallet/create", (req, res) => {
        getNewWallet(req, res);
    });
    app.post("/wallet/login", (req, res) => {
        preLogin(req, res);
    });


    // private api 
}