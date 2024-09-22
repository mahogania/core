import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EventScriptsWhereInput = {
  command?: IntNullableFilter;
  comment?: StringNullableFilter;
  dataint?: IntNullableFilter;
  datalong?: IntNullableFilter;
  datalong2?: IntNullableFilter;
  delay?: IntNullableFilter;
  id?: StringFilter;
  o?: FloatNullableFilter;
  x?: FloatNullableFilter;
  y?: FloatNullableFilter;
  z?: FloatNullableFilter;
};
