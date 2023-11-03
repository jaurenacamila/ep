import { Router } from "express";

import userRoutes from "./userRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/ini", userRoutes)

export default indexRoutes