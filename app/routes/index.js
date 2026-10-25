import express from "express";
const router = express.Router();

import homeRoutes from "./home.routes.js";

router.use("/", homeRoutes);

export default router;
