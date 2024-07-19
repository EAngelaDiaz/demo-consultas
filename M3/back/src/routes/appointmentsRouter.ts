import { Router } from "express";
import { getAppointments, getAppointmentsById, createAppointment, statusAppointments } from "../controllers/appointmentsControllers";


const appointmentsRouter: Router = Router()

appointmentsRouter.get("/", getAppointments)

appointmentsRouter.get("/:id", getAppointmentsById)

appointmentsRouter.post("/schedule", createAppointment)

appointmentsRouter.delete("/cancel", statusAppointments)

export default appointmentsRouter;