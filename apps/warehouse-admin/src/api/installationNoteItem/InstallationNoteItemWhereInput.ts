import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InstallationNoteItemWhereInput = {
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  prevdocDetailDocname?: StringNullableFilter;
  prevdocDocname?: StringNullableFilter;
  prevdocDoctype?: StringNullableFilter;
  qty?: FloatNullableFilter;
  serialAndBatchBundle?: StringNullableFilter;
  serialNo?: StringNullableFilter;
};
