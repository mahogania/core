import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UomWhereInput = {
  docstatus?: IntNullableFilter;
  enabled?: BooleanNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  mustBeWholeNumber?: BooleanNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  uomName?: StringNullableFilter;
};
