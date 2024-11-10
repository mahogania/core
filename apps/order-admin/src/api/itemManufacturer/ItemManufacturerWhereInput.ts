import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemManufacturerWhereInput = {
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isDefault?: BooleanNullableFilter;
  itemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  manufacturer?: StringNullableFilter;
  manufacturerPartNo?: StringNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
