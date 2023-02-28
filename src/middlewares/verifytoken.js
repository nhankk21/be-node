import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {Status} from "../common/common.js";
dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
            if (err)
                res.status(403).json({
                    messsage: "Invalid token",
                    status: Status.INVALID,
                });
            req.user = data;
            next();
        });
    } else {
        return res.status(401).json("Unauthenticated!");
    }
};
const expiresIn = '1h';
export function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn})
}

// const verifyTokenAndAuthorization = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.params.id || req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("Not allowed");
//         }
//     });
// };

// const verifyTokenAndAdmin = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("Not allowed");
//         }
//     });
// };

export { verifyToken};
