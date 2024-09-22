import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AreaTriggerScriptWhereInput = {
  entry?: IntNullableFilter;
  id?: StringFilter;
  scriptName?: StringNullableFilter;
};
