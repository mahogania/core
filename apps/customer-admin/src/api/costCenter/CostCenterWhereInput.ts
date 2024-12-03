import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CostCenterWhereInput = {
  company?: StringNullableFilter;
  costCenterName?: StringNullableFilter;
  costCenterNumber?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: BooleanNullableFilter;
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
  parentCostCenter?: StringNullableFilter;
  rgt?: IntNullableFilter;
};
