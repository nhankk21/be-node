import { dbDisconnected } from "../database/mongodb.js";

export function onDisconnected() {
    dbDisconnected();
    console.log("disconnected to server");
}