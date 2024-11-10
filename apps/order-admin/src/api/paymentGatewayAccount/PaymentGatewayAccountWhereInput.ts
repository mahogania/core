import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentGatewayAccountWhereInput = {
  creation?: DateTimeNullableFilter;
  currency?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isDefault?: IntNullableFilter;
  message?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  paymentAccount?: StringNullableFilter;
  paymentChannel?: StringNullableFilter;
  paymentGateway?: StringNullableFilter;
};
