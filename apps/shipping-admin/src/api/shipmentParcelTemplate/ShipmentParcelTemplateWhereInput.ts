import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ShipmentParcelTemplateWhereInput = {
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
  parcelTemplateName?: StringNullableFilter;
  weight?: FloatNullableFilter;
  width?: IntNullableFilter;
};
