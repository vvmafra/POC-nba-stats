import { Router } from "express";

import * as statsController from "@/controllers/stats.controller"
import { validateSchema } from "@/middlewares/validateSchema";
import { statsSchema } from "@/schemas/stats.schemas";

const statsRouter = Router()

statsRouter.get("/stats", statsController.getStats)
statsRouter.post("/stats",validateSchema(statsSchema), statsController.createStat)
statsRouter.put("/stats/:id", statsController.putStats)
statsRouter.delete("/stats/:id", statsController.deleteStats)

export default statsRouter