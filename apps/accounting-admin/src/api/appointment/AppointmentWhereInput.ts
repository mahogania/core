import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  appointmentWith?: StringNullableFilter;
  calendarEvent?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customerDetails?: StringNullableFilter;
  customerEmail?: StringNullableFilter;
  customerName?: StringNullableFilter;
  customerPhoneNumber?: StringNullableFilter;
  customerSkype?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  party?: StringNullableFilter;
  scheduledTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
