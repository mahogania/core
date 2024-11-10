import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BisectNodesWhereInput = {
  balanceSheetSummary?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  difference?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  generated?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  leftChild?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: IntNullableFilter;
  owner?: StringNullableFilter;
  periodFromDate?: DateTimeNullableFilter;
  periodToDate?: DateTimeNullableFilter;
  profitLossSummary?: FloatNullableFilter;
  rightChild?: StringNullableFilter;
  root?: StringNullableFilter;
};
