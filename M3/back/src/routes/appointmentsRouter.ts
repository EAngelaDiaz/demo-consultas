import { Router } from "express";


const appointmentsRouter: Router = Router()

appointmentsRouter.get("/")

appointmentsRouter.get("/:id")

appointmentsRouter.post("/schedule")

appointmentsRouter.delete("/cancel")

export default appointmentsRouter;