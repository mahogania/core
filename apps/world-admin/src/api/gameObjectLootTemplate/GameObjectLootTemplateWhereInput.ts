import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GameObjectLootTemplateWhereInput = {
  chance?: FloatNullableFilter;
  comment?: StringNullableFilter;
  entry?: BigIntNullableFilter;
  groupId?: BigIntNullableFilter;
  id?: BigIntFilter;
  itemId?: BigIntNullableFilter;
  lootMode?: IntNullableFilter;
  maxCount?: IntNullableFilter;
  minCount?: IntNullableFilter;
  questId?: BigIntNullableFilter;
  referenceId?: BigIntNullableFilter;
};
