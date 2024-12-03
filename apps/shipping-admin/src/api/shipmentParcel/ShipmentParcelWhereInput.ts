import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ShipmentParcelWhereInput = {
  count?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  length?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  weight?: FloatNullableFilter;
  width?: IntNullableFilter;
};
