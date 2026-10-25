import express from "express";
const router = express.Router();
import path from "node:path";
import { fileURLToPath } from "node:url";
import {dirname} from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



router.get("/", (req , res) => {

 res.sendFile(path.join(__dirname, ".." ,"public" , "dashboard.html"));

});

export default router;

