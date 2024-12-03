import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "customerName";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.customerName?.toString() || String(record.id);
};
