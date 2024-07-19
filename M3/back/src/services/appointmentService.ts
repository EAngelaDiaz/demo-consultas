import AppointmentsDto from "../dto/AppointmentsDto";
import IAppointments from "../interfaces/IAppontments";

let appointments: IAppointments[] = [{
    id: 1,
    detalle: "Pediatra",
    fecha: "3-8-24",
    hora: "15:30",
    status: true
}]

let id: number = 2

export const getAppointmentsService = async (): Promise<IAppointments[]> => {
    return appointments;
}

export const createAppointmentService = async ( userData: AppointmentsDto): Promise<IAppointments> => {
    const newAppointments: IAppointments = {
        id,
        detalle: userData.detalle,
        fecha: userData.fecha,
        hora: userData.hora,
        status: userData.status
    }
    appointments.push(newAppointments)
    id++
    return newAppointments
}

export const getAppointmentByIdService = async (id: number): Promise<void> => {
    appointments = appointments.filter((appointments: IAppointments)=> {
         return appointments.id == id
    })
}

export const statusByIdService = async () => {}