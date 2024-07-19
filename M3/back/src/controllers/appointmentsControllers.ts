import { Request, Response } from "express";
import { getAppointmentByIdService, getAppointmentsService, createAppointmentService, statusByIdService } from "../services/appointmentService";
import IAppointments from "../interfaces/IAppontments";

export const getAppointments = async (req: Request, res: Response)=> {
    const appointments: IAppointments[] = await getAppointmentsService();
    res.status(200).json(appointments)
    
}

export const getAppointmentsById = async (req: Request, res:  Response) => {}

export const createAppointment = async (req: Request, res: Response) => {}

export const statusAppointments = async (req: Request, res: Response) => {}