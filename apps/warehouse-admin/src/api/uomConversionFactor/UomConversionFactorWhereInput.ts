import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UomConversionFactorWhereInput = {
  category?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromUom?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  toUom?: StringNullableFilter;
  value?: FloatNullableFilter;
};
