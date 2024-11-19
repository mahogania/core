import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountingDimensionDetailWhereInput = {
  automaticallyPostBalancingAccountingEntry?: IntNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  defaultDimension?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  mandatoryForBs?: IntNullableFilter;
  mandatoryForPl?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  offsettingAccount?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  referenceDocument?: StringNullableFilter;
};
