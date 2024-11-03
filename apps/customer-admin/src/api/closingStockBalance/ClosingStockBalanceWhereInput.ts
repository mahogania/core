import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClosingStockBalanceWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  fromDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  includeUom?: StringNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  status?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
  warehouse?: StringNullableFilter;
  warehouseType?: StringNullableFilter;
};
