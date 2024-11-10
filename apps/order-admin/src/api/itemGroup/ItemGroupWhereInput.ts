import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemGroupWhereInput = {
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  image?: StringNullableFilter;
  isGroup?: BooleanNullableFilter;
  itemGroupName?: StringNullableFilter;
  lft?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  oldParent?: StringNullableFilter;
  owner?: StringNullableFilter;
  parentItemGroup?: StringNullableFilter;
  rgt?: IntNullableFilter;
};
