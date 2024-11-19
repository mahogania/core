import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  addressLine1?: StringNullableFilter;
  addressLine2?: StringNullableFilter;
  addressTitle?: StringNullableFilter;
  addressType?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  county?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  emailId?: StringNullableFilter;
  fax?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isPrimaryAddress?: IntNullableFilter;
  isShippingAddress?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  phone?: StringNullableFilter;
  pincode?: StringNullableFilter;
  state?: StringNullableFilter;
};