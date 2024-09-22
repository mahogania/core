import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GameEventQuestConditionWhereInput = {
  conditionId?: IntNullableFilter;
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  num?: FloatNullableFilter;
  quest?: IntNullableFilter;
};
