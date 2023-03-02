import { getNewPrivateKey} from "../business/wallet/newWallet.js";
import { getNewAddress } from '../business/address/newAddress.js';
import { walletCol } from "../database/mongodb.js";
import {isHexAddess, Status} from "../common/common.js";
import { generateToken } from "../middlewares/verifytoken.js";
import { login } from "../business/wallet/authen.js";


export async function getNewWallet(req, res){
    const address = getNewAddress();
    const private_key = getNewPrivateKey();
    const wallet = {
        address: address,
        private_key: private_key,
        password: req.body.password,
        balance: 0,
        created: Date.now(),
        updated: Date.now(),
    }
    try {
        await walletCol.insertOne(wallet);
    } catch{
        console.log("Fail to insert new wallet!");
        res.send({
            status: Status.ERROR,
            message : "Fail to create new wallet!",
        });
    }
    res.send({
        status: Status.OK,
        message : "Create new wallet successfully!",
        data: wallet,
    });
}
export function preLogin(req, res){

    if (!isHexAddess(req.body.address) || req.body.password == "") {
        res.send({
            status: Status.INVALID,
            message: "Invalid address or password!",
          });
    }
    if(!login(req.body.address, req.body.password)) {
        res.send({
            status: Status.FAILED,
            message: "Login failed!",
          });
    }
    res.send({
        status: Status.OK,
        message: "Login sucessfully!",
        data: {
            jwt : generateToken({address: req.body.address}),
        }
    });
}
export function fogotPwd(req, res){

    if (!isValidPrivateKey(req.body.private_key)) {
        res.send({
            status: Status.INVALID,
            message: "Invalid Private Key!",
          });
    }
    if (!changePassword(req.body.private_key, req.body.new_password, req.body.confirmed_password)){
        res.send({
            status: Status.FAILED,
            message: "Confirm password is incorrect!",
          });
    }
    res.send({
        status: Status.OK,
        message: "Password has been reset !",
      });


}
export async function changePassword(address, private_key, new_password, confirmed_password) {
 
  if (new_password !== confirmed_password) {
    return false;
  }
  const filter = {
    $or: [{ private_key: private_key }, { address: address }],
  };
  
  const update = { $set: { password: new_password } };
  const result = await walletCol.updateOne(filter, update);
  return result.modifiedCount > 0;
}
