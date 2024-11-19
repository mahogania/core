import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DeliveryTripWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  departureTime?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  driver?: StringNullableFilter;
  driverAddress?: StringNullableFilter;
  driverEmail?: StringNullableFilter;
  driverName?: StringNullableFilter;
  emailNotificationSent?: BooleanNullableFilter;
  employee?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  status?: StringNullableFilter;
  totalDistance?: FloatNullableFilter;
  uom?: StringNullableFilter;
  vehicle?: StringNullableFilter;
};
