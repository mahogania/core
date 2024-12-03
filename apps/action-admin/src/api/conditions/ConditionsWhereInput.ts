import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConditionsWhereInput = {
  comment?: StringNullableFilter;
  conditionStringValue1?: StringNullableFilter;
  conditionTarget?: IntNullableFilter;
  conditionTypeOrReference?: IntNullableFilter;
  conditionValue1?: IntNullableFilter;
  conditionValue2?: IntNullableFilter;
  conditionValue3?: IntNullableFilter;
  elseGroup?: IntNullableFilter;
  errorTextId?: IntNullableFilter;
  errorType?: IntNullableFilter;
  id?: StringFilter;
  negativeCondition?: IntNullableFilter;
  scriptName?: StringNullableFilter;
  sourceEntry?: IntNullableFilter;
  sourceGroup?: IntNullableFilter;
  sourceId?: IntNullableFilter;
  sourceTypeOrReferenceId?: IntNullableFilter;
};
