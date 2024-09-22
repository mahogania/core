import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GameEventConditionWhereInput = {
  conditionId?: IntNullableFilter;
  description?: StringNullableFilter;
  doneWorldStateField?: IntNullableFilter;
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  maxWorldStateField?: IntNullableFilter;
  reqNum?: FloatNullableFilter;
};
