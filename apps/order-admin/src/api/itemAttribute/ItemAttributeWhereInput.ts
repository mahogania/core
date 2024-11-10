import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemAttributeWhereInput = {
  attributeName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromRange?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  increment?: FloatNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  numericValues?: BooleanNullableFilter;
  owner?: StringNullableFilter;
  toRange?: FloatNullableFilter;
};
