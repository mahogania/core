import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BomOperationWhereInput = {
  baseCostPerUnit?: FloatNullableFilter;
  baseHourRate?: FloatNullableFilter;
  baseOperatingCost?: FloatNullableFilter;
  batchSize?: IntNullableFilter;
  costPerUnit?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fixedTime?: BooleanNullableFilter;
  hourRate?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  image?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  operatingCost?: FloatNullableFilter;
  operation?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  sequenceId?: IntNullableFilter;
  setCostBasedOnBomQty?: BooleanNullableFilter;
  timeInMins?: FloatNullableFilter;
  workstation?: StringNullableFilter;
  workstationType?: StringNullableFilter;
};
