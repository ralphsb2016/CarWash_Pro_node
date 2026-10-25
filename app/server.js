import express from "express";

import router from "./routes/index.js";
import path from "node:path";

import { fileURLToPath } from "node:url";
import {dirname} from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const server = express();
const port = 3000;

server.set("port", port);

server.use("/",router);

server.use(express.static(path.join(__dirname, "public")));

export default server;