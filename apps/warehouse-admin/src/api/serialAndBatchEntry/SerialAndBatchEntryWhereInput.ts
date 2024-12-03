import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SerialAndBatchEntryWhereInput = {
  batchNo?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  deliveredQty?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomingRate?: FloatNullableFilter;
  isOutward?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  outgoingRate?: FloatNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  qty?: FloatNullableFilter;
  serialNo?: StringNullableFilter;
  stockQueue?: StringNullableFilter;
  stockValueDifference?: FloatNullableFilter;
  warehouse?: StringNullableFilter;
};
