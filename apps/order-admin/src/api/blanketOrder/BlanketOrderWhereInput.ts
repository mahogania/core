import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlanketOrderWhereInput = {
  amendedFrom?: StringNullableFilter;
  blanketOrderType?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  customerName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  supplier?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  tcName?: StringNullableFilter;
  terms?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
};
