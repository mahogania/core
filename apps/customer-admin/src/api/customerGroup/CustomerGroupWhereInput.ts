import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CustomerGroupWhereInput = {
  creation?: DateTimeNullableFilter;
  customerGroupName?: StringNullableFilter;
  defaultPriceList?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isGroup?: BooleanNullableFilter;
  lft?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  oldParent?: StringNullableFilter;
  owner?: StringNullableFilter;
  parentCustomerGroup?: StringNullableFilter;
  paymentTerms?: StringNullableFilter;
  rgt?: IntNullableFilter;
};
