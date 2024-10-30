import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetMovementItemWhereInput = {
  asset?: StringNullableFilter;
  assetName?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  fromEmployee?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  sourceLocation?: StringNullableFilter;
  targetLocation?: StringNullableFilter;
  toEmployee?: StringNullableFilter;
};
