import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobCardItemWhereInput = {
  allowAlternativeItem?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  requiredQty?: FloatNullableFilter;
  sourceWarehouse?: StringNullableFilter;
  stockUom?: StringNullableFilter;
  transferredQty?: FloatNullableFilter;
  uom?: StringNullableFilter;
};
