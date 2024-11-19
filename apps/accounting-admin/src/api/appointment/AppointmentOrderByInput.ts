import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentWith?: SortOrder;
  calendarEvent?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customerDetails?: SortOrder;
  customerEmail?: SortOrder;
  customerName?: SortOrder;
  customerPhoneNumber?: SortOrder;
  customerSkype?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  party?: SortOrder;
  scheduledTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
